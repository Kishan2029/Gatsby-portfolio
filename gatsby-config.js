/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, `gatsby-plugin-image`
  ],
  siteMetadata: {
    title: 'Kishan Prajapati',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 Kishan Prajapati',
    contact: 'kishanprajapati2029@gmail.com'
  },
}