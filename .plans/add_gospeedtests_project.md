# Plan: Add GoSpeedTests Project

This plan outlines the steps to integrate the "GoSpeedTests" GitHub project into the personal website.

## 1. Research & Data Gathering
- [ ] **Confirm GitHub URL**: Verify the exact URL of the `GoSpeedTests` repository (assumed to be `https://github.com/AdrianTJ/GoSpeedTests`).
- [ ] **Extract Description**: Identify a 1-2 sentence description of the project from its README.
- [ ] **Gather Metadata**: Determine the "importance" (sorting weight) and "category" (e.g., `work` or `fun`) for the project.

## 2. Asset Preparation
- [ ] **Project Thumbnail**: Select or create a thumbnail image (e.g., `assets/img/gospeedtests.png`). 
    - *Note: Standard size for the theme is approximately 800x600 for cards.*

## 3. Implementation
- [ ] **Create Project File**: Create `_projects/gospeedtests.md`.
    - **Front Matter Template:**
      ```yaml
      ---
      layout: page
      title: GoSpeedTests
      description: [Project Description]
      img: assets/img/gospeedtests.png
      importance: 2
      category: work
      github: https://github.com/AdrianTJ/GoSpeedTests
      ---
      ```
    - **Content**: Add a brief overview or "Coming Soon" text if a full showcase isn't ready.
- [ ] **Update Repositories Data**: (Optional) Add `AdrianTJ/GoSpeedTests` to `_data/repositories.yml` under `github_repos` to show it in the dedicated repositories section.

## 4. Verification
- [ ] **Local Preview**: Run `bundle exec jekyll serve` to verify the project card's appearance.
- [ ] **Link Check**: Ensure the GitHub icon correctly links to the repository.
- [ ] **Responsiveness**: Check how the new card fits in the project grid on different screen sizes.

## 5. Deployment
- [ ] **Commit & Push**: Push the changes to the `main` branch to trigger the GitHub Actions deployment.
