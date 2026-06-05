import { HtmlBasePlugin } from "@11ty/eleventy";


export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory('_site');

  // Set directories to pass through to the output folder
  eleventyConfig.addPassthroughCopy('src/css/');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/m-bulletins/');
  eleventyConfig.addPassthroughCopy('src/m-pdf/');

  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Adds a filter to convert a date into a timestamp
  eleventyConfig.addFilter("toTimestamp", function(dateVal) {
    return dateVal ? new Date(dateVal).getTime() : new Date().getTime();
  });

  // Sort an array of objects by a specific date attribute
  eleventyConfig.addFilter("sortByDate", (arr) => {
    return arr.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  });






}

export const config = {
  // dataTemplateEngine: 'njk', // in original course, needed?
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  
  pathPrefix: "gandy03",
};
