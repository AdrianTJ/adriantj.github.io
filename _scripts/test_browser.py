"""Responsive accessibility and interaction checks for a running local preview."""

import os
from pathlib import Path
import unittest

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
BASE = os.environ.get("SITE_URL", "http://127.0.0.1:4000")
ROUTES = (
    "/", "/projects/", "/cv/", "/books/", "/blog/", "/blog/2026/mollify/",
    "/projects/foothills_labs/", "/projects/labloop/", "/books/a_moveable_feast/",
    "/books/house_of_leaves/", "/books/the_algebraist/",
)


class BrowserTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(headless=True, executable_path=os.environ.get("CHROME"))

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()

    def test_accessibility_and_layout(self):
        for width in (390, 1280):
            for theme in ("light", "dark"):
                with self.subTest(width=width, theme=theme):
                    context = self.browser.new_context(viewport={"width": width, "height": 844}, color_scheme=theme, reduced_motion="reduce")
                    page = context.new_page()
                    for route in ROUTES:
                        with self.subTest(route=route):
                            response = page.goto(BASE + route, wait_until="networkidle")
                            self.assertEqual(response.status, 200)
                            page.evaluate("document.fonts.ready")
                            self.assertLessEqual(page.evaluate("document.documentElement.scrollWidth"), width)
                            page.add_script_tag(path=str(ROOT / "node_modules/axe-core/axe.min.js"))
                            violations = page.evaluate("""async () => (await axe.run(document, {
                                runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa']}
                            })).violations.map(v => ({id: v.id, nodes: v.nodes.map(n => n.target)}))""")
                            self.assertEqual(violations, [])
                            if os.environ.get("SCREENSHOT_DIR"):
                                directory = Path(os.environ["SCREENSHOT_DIR"])
                                directory.mkdir(parents=True, exist_ok=True)
                                name = route.strip("/").replace("/", "-") or "home"
                                page.screenshot(path=str(directory / f"{name}-{width}-{theme}.png"), full_page=True)
                    context.close()

    def test_mobile_navigation_and_contact(self):
        context = self.browser.new_context(viewport={"width": 390, "height": 844}, reduced_motion="reduce")
        page = context.new_page()
        page.goto(BASE, wait_until="networkidle")
        self.assertLess(page.locator(".home-links").bounding_box()["y"], 844)
        self.assertEqual(page.locator(".selected-work li").count(), 3)
        page.get_by_role("button", name="Toggle navigation").click()
        page.locator("#navbarNav").get_by_role("link", name="experience", exact=True).click()
        page.wait_for_url("**/cv/")
        self.assertTrue(page.get_by_role("heading", name="experience", exact=True).is_visible())
        context.close()

    def test_homepage_without_javascript(self):
        context = self.browser.new_context(java_script_enabled=False)
        page = context.new_page()
        page.goto(BASE)
        self.assertIn("adrian", page.locator("h1").inner_text())
        self.assertEqual(page.locator(".selected-work li").count(), 3)
        self.assertTrue(page.locator('.home-links a[href="/cv/"]').is_visible())
        context.close()

    def test_new_books_are_shown_as_finished(self):
        page = self.browser.new_page()
        page.goto(BASE + "/books/", wait_until="networkidle")
        for slug in ("a_moveable_feast", "house_of_leaves", "the_algebraist"):
            entry = page.locator(f'.book-entry[href="/books/{slug}/"]')
            self.assertEqual(entry.locator(".book-status").inner_text(), "finished")
        page.close()


if __name__ == "__main__":
    unittest.main()
