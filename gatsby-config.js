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
        name: `mountains`,
        path: `${__dirname}/mountains`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cycling_ascents`,
        path: `${__dirname}/cycling_ascents/`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};


