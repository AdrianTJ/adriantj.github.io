module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Keep states applied by the theme and time-of-day scripts.
  safelist: {
    greedy: [/data-sky/, /data-theme/, /is-active/, /is-typing/],
  },
};
