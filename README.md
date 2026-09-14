# Adrian TJ

<div align="center">
  <a href="https://adriantj.github.io">
    <img src="assets/img/prof_pic.jpg" alt="Adrian Tame Jacobo" width="150" style="border-radius: 50%;">
  </a>

  <h3>Lead II Data Scientist @ S&P Global</h3>

[![Website](https://img.shields.io/badge/Website-adriantj.github.io-blue?style=flat-square)](https://adriantj.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-adrian--tj-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/adrian-tj/)
[![GitHub](https://img.shields.io/badge/GitHub-AdrianTJ-lightgrey?style=flat-square&logo=github)](https://github.com/AdrianTJ)

</div>

---

Welcome to the source code for my personal portfolio and blog, **[The Paperclip Manifesto](https://adriantj.github.io/blog/)**.

## 🚀 About Me

I build evaluations and tools for understanding when AI systems can be trusted. I run [Plicara Labs](https://plicara.ai/), my independent AI research practice, and work as a Lead II Data Scientist at S&P Global on document extraction and internal model benchmarking. My experience also includes experimentation at Zillow and data-science leadership at Coca-Cola FEMSA.

My work focuses on:

- **AI evaluation and agent tooling**
- **Bayesian Optimization**
- **Time Series Forecasting** (Modeling temporal dynamics and uncertainty)
- **Causal Inference** (Measuring impact in complex environments)
- **Experimental Design** (Large-scale A/B testing frameworks)

I studied Applied Mathematics at **ITAM** and completed my MSc in Data Science coursework in 2022; my thesis is expected in September 2026. See the [experience page](https://adriantj.github.io/cv/) for the high-level public record.

## 🌐 Live Site

You can find my full portfolio and blog at:
👉 **[adriantj.github.io](https://adriantj.github.io)**

## 🛠️ Built With

This site is built using [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme. It is automatically deployed via GitHub Actions to GitHub Pages.

## Local development

Use Ruby 3.3, ImageMagick, and Python with `nbconvert` available. Install the Ruby dependencies with `BUNDLE_PATH=vendor/bundle bundle install`. For an isolated Python environment, run `uv venv .venv` followed by `uv pip install --python .venv/bin/python nbconvert`.

On an Apple Silicon Mac with Homebrew Ruby 3.3:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PWD/.venv/bin:$PATH"
BUNDLE_PATH=vendor/bundle bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Open [localhost:4000](http://127.0.0.1:4000/). Work on feature branches; the deployment workflow publishes pushes to `main` or `master`.

The cloud theme, time-of-day preview links, and image credits are documented in [docs/sky-theme.md](docs/sky-theme.md).

## Content and checks

The homepage keeps a short introduction, direct contact links, and selected work ahead of the full biography. Featured summaries live with their project in `_projects/`; set `featured: true`, `featured_summary`, and optionally `featured_title`. `_pages/cv.md` holds the public experience and education record. Keep these details consistent with the GitHub profile and Plicara, and publish only approved high-level employer information. News stays in its archive; the inherited sample book review is unpublished rather than removed.

After building `_site`, run `python3 _scripts/test_site.py` to check internal links and regression cases. Browser checks use the running preview and test desktop/mobile layouts, both themes, accessibility, contact links, and no-JavaScript rendering:

```sh
npm ci
uv pip install --python .venv/bin/python -r requirements-test.txt
.venv/bin/python -m playwright install chromium
.venv/bin/python _scripts/test_browser.py
```

`SITE_URL` defaults to `http://127.0.0.1:4000`. `CHROME` can select an existing Chromium executable, and `SCREENSHOT_DIR` saves review images. Pull requests and main-branch pushes run the same build, internal-link, and browser checks through `.github/workflows/broken-links.yml` and the reusable `.github/workflows/axe.yml`. These checks do not certify external websites or replace manual visual and keyboard review.

## 📬 Contact

- **Email:** [adrian.tame.jacobo@gmail.com](mailto:adrian.tame.jacobo@gmail.com)
- **LinkedIn:** [adrian-tj](https://www.linkedin.com/in/adrian-tj/)
- **Website:** [adriantj.github.io](https://adriantj.github.io)
