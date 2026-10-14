# Decision log

## DEC-001: Simplify the personal site around a photographic sky

- **Date:** 2026-09-10
- **Status:** decided
- **Context:** Adrian found the serif typography and engraved artwork too noisy and felt they distracted from the work. He requested a calmer cloud background, terminal typography, a typed name, and clear reading panels on interior pages.
- **Decision:** Keep Jekyll and the existing content routes. Replace the engraving stylesheet with a shared cloud theme, use six real photographs selected by local time, and preserve the existing light/dark preference. Omit the homepage portrait from this composition while retaining its source asset. Work on `feat/cloud-terminal-design` and review locally.
- **Consequences:** Background changes do not require geolocation or an external image request. Fixed local-time windows approximate the day rather than astronomical sunrise. Long-form content stays on a solid surface. Reduced-motion and no-JavaScript visits retain readable content. Deployment remains a separate step.

## DEC-002: Use the current Plicara Labs identity

- **Date:** 2026-09-10
- **Status:** decided
- **Context:** Adrian clarified that Plicara Labs is the new name and Foothills Labs is deprecated.
- **Decision:** Place the official Plicara mark beside Adrian's name and update visible lab references and repository links to Plicara. Preserve the existing project URL for link continuity.
- **Consequences:** The site carries the current identity without breaking links to the former project page. Brand assets come from Plicara's public brand repository.

## DEC-003: Make the research and professional story inspectable

- **Date:** 2026-09-13
- **Status:** decided
- **Context:** Adrian approved the website critique and requested implementation across the personal site, Plicara, and GitHub profile, with separate PRs for review. He supplied a CV and asked for high-level descriptions rather than verbatim metrics or internal details.
- **Decision:** Preserve the sky design, add contact and experience links near the name, and feature regex evaluation, Bayesian-optimization research, and the collaborative Mollify project before the full biography. Add an experience page using the supplied roles and dates, and consistently describe MSc coursework as completed with the thesis expected in September 2026. Move academic archives out of primary navigation and retain news and sample-book sources without promoting outdated or placeholder content.
- **Consequences:** The public record distinguishes independent research, collaborative work, and employer experience without inventing management scope or publishing internal impact figures. The GitHub profile and lab link back to the experience page, so merge the personal-site PR first. Automated link and accessibility checks cover the redesigned pages; the clarified research interpretation is proposed separately in Plicara's PR. Nothing is deployed or merged by this task.

## DEC-004: Keep the public CV brief and curate the project list

- **Date:** 2026-09-13
- **Status:** decided
- **Context:** After reviewing PR #16, Adrian requested a lighter experience page and a more selective project list. This refines the public-detail level chosen in DEC-003.
- **Decision:** Show position titles, dates, and locations without role descriptions or teaching history, retain research and technical practice, and direct readers to email, LinkedIn, or X for the full CV. Use the requested concise education wording. Remove the Mollify sentence from the homepage biography, consistently emphasize collaboration interests, add labloop to projects, and unpublish Agentic Engineering, template-ai-engineering, Loadstar, and Trading Strategies while retaining their sources.
- **Consequences:** The website remains an introduction rather than a full CV. Retired projects are absent from the public site and can be restored from their existing source files. Existing MSc status details elsewhere are unchanged; this edit does not assert that a degree has been awarded.

## DEC-005: Refresh stale facts and retire template leftovers

- **Date:** 2026-10-12
- **Status:** decided
- **Context:** A site review found the thesis still listed as expected in September 2026, a stale news archive with typos still live at `/news/`, the deprecated Foothills name in the Plicara project URL, a lowercase two-word page title, template keywords, and unused al-folio demo media.
- **Decision:** Describe the MSc thesis as submitted with the defense pending. Keep the official "Lead II Data Scientist" title. Unpublish the news archive and both news posts while keeping their sources. Move the Plicara page to `/projects/plicara_labs/` and keep `/projects/foothills_labs/` as a redirect. Use the full name "Adrian Tame Jacobo" in page titles and metadata through a new `full_name` setting, while the homepage keeps the typed short name. Replace the keywords, enable Schema.org metadata, add the X profile to the social links, replace "a decade+ of statistical practice" with "years of statistical practice", and delete the unused demo video, audio, and Plotly files.
- **Consequences:** Old Plicara links still resolve. Search results and link previews show the full name. The repository loses about 33 MB of demo media that the site never referenced. When the defense happens, update `_pages/about.md`, `_pages/cv.md`, `_projects/bayesian_optim_bass.md`, and `README.md`.

## DEC-006: Surface Plicara research in the personal writing section

- **Date:** 2026-10-13
- **Status:** decided
- **Context:** Adrian publishes research on plicara.ai and wanted one place to write rather than two, while keeping the personal site's existing posts.
- **Decision:** Import both Plicara feeds, research (`https://plicara.ai/research/feed.xml`) and essays (`https://plicara.ai/essays/feed.xml`), with the theme's external-sources plugin, so each piece appears in the blog list and on the homepage, labeled "plicara research" or "plicara essays" and linking to the original. A piece that briefly appears in both feeds while moving between sections is imported once. Rename the "blog" tab to "writing" and the homepage heading to "latest writing", keeping the `/blog/` URLs. Keep the SQL and Mollify posts on the personal site. Hide the read-time estimate for imported posts, because the feed carries only summaries. Make imported stubs forward immediately, keep them out of the sitemap, and let the build continue if the feed is unreachable.
- **Consequences:** New Plicara pieces appear on the next site build without copying text. The site test checks for Plicara links and skips when the feed was unavailable at build time. Plicara articles should keep Adrian's byline linking back here.
