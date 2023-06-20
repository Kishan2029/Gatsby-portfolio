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
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/notes/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Kishan Prajapati',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 Kishan Prajapati'
  },
}