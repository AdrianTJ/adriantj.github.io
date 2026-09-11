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
