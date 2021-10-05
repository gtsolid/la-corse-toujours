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
        name: `top10`,
        path: `${__dirname}/top10/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `memories`,
        path: `${__dirname}/memories/`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};


