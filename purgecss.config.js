module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Selectors keyed off JS-set attributes never appear verbatim in the built
  // HTML/JS, so PurgeCSS would strip them (it deleted the [data-pillar="b"]
  // pillar-variant rules in production). Keep everything touching these.
  safelist: {
    greedy: [/data-pillar/, /data-theme/, /wc-ruin/],
  },
};
