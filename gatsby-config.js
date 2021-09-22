module.exports = {
  siteMetadata: {
    siteUrl: "https://lacorsetoujoursmain.gatsbyjs.io/",
    title: "La Corse Toujours",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};


