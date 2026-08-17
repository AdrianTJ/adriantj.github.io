module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // data-palette is written by a script at load, so it never appears verbatim
  // in the built HTML and PurgeCSS would strip every rule keyed off it —
  // which is exactly how the daily ink shipped broken once before. Keep
  // everything touching these.
  safelist: {
    greedy: [/data-palette/, /data-theme/, /wc-arch/],
  },
};
