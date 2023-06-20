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
      resolve: `gatsby-transformer-remark`,
      options: {},
    }
  ],
  siteMetadata: {
    title: 'Kishan Prajapati',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 Kishan Prajapati'
  },
}