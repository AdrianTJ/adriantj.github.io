"""Regression checks against a freshly built Jekyll site (standard library only)."""

from html.parser import HTMLParser
from pathlib import Path
import unittest
from urllib.parse import unquote, urljoin, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
ORIGIN = "https://adriantj.github.io"


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.links = []
        self.anchor_depth = 0
        self.nested_anchors = 0
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "a":
            self.nested_anchors += self.anchor_depth > 0
            self.anchor_depth += 1
        for key in ("href", "src"):
            if attrs.get(key):
                self.links.append(attrs[key])

    def handle_endtag(self, tag):
        if tag == "a":
            self.anchor_depth = max(0, self.anchor_depth - 1)


class SiteTest(unittest.TestCase):
    def test_internal_links_and_assets_exist(self):
        pages = list(SITE.rglob("*.html"))
        self.assertTrue(pages, "Build the site before running these tests")
        for file in pages:
            if "assets" in file.relative_to(SITE).parts:
                continue
            source_url = f"{ORIGIN}/{file.relative_to(SITE).as_posix()}"
            for link in Page(file.read_text()).links:
                target = urlsplit(urljoin(source_url, link))
                if target.netloc != urlsplit(ORIGIN).netloc or target.scheme not in ("http", "https"):
                    continue
                path = SITE / unquote(target.path).lstrip("/")
                if path.is_dir():
                    path /= "index.html"
                with self.subTest(page=str(file.relative_to(SITE)), link=link):
                    self.assertTrue(path.is_file(), f"Missing local target: {path}")

    def test_project_cards_do_not_nest_links(self):
        page = Page((SITE / "projects/index.html").read_text())
        self.assertEqual(page.nested_anchors, 0)

    def test_mollify_example_preserves_github_expression(self):
        html = (SITE / "blog/2026/mollify/index.html").read_text()
        self.assertIn("github.base_ref", html)

    def test_home_has_contact_and_selected_work_before_biography(self):
        html = (SITE / "index.html").read_text()
        self.assertIn('class="home-links"', html)
        self.assertIn('href="/cv/"', html)
        self.assertLess(html.index('id="selected-work"'), html.index('class="home-bio'))
        self.assertNotIn("Starting migration", html)
        self.assertNotIn("I also help build", html)
        for interest in ("agentic systems", "benchmarking", "novel AI research", "anomaly detection"):
            self.assertIn(f"<strong>{interest}</strong>", html)

    def test_cv_keeps_role_summary_and_full_cv_contact(self):
        cv = (SITE / "cv/index.html").read_text()
        for employer in ("S&amp;P Global", "Zillow", "Coca-Cola FEMSA"):
            self.assertIn(employer, cv)
        self.assertIn("For my full CV", cv)
        for contact in ("mailto:adrian.tame.jacobo@gmail.com", "https://www.linkedin.com/in/adrian-tj/", "https://x.com/Adrian_TameJ"):
            self.assertIn(contact, Page(cv).links)
        experience = cv.split('<h2 id="experience">')[1].split('<h2 id="independent-research-and-open-source">')[0]
        self.assertEqual(experience.count("<h3"), 4)
        self.assertNotIn("<li>", experience)
        self.assertNotIn("Teaching and academic work", cv)
        self.assertNotIn("thesis expected September 2026", cv)
        self.assertIn("My research develops Bayesian Adaptive Spline Surfaces", cv)
        self.assertIn("Technical practice", cv)

    def test_home_metadata_and_education_status(self):
        home = (SITE / "index.html").read_text()
        self.assertIn('property="og:title"', home)
        self.assertIn("Plicara", home)
        self.assertNotIn("have a MSc", home)

    def test_projects_add_labloop_and_retire_older_entries(self):
        links = Page((SITE / "projects/index.html").read_text()).links
        self.assertIn("/projects/labloop/", links)
        for slug in ("agentic_engineering", "template_ai_engineering", "loadstar", "trading_strategies"):
            self.assertNotIn(f"/projects/{slug}/", links)
            self.assertFalse((SITE / f"projects/{slug}/index.html").exists())

    def test_finished_books_are_on_the_shelf(self):
        links = Page((SITE / "books/index.html").read_text()).links
        for slug in ("a_moveable_feast", "house_of_leaves", "the_algebraist"):
            self.assertIn(f"/books/{slug}/", links)
            self.assertIn("status: Finished", (ROOT / f"_books/{slug}.md").read_text())


if __name__ == "__main__":
    unittest.main()
