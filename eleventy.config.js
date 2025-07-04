const { DateTime } = require("luxon");

module.exports = async function (eleventyConfig) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  eleventyConfig.addFilter("postDate", (date) =>
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED),
  );

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("exclude", (array, tag) => {
    return array.filter((t) => t !== tag);
  });
};

module.exports.config = {
  dir: {
    input: "src",
  },
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
  pathPrefix: "/villa-straylight/",
};
