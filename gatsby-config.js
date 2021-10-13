require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Res Publica',
    description: 'Građanski Demokratski Centar',
    author: 'Nikola Bogićević'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/images/slider`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qbmgqmkci02u`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Merriweather",
              variants: ["300", "400"],
            },
            {
              family: "Open+Sans",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
          key: process.env.GOOGLE_MAPS_KEY,
          center: `44.86818474209635,17.66247939510649`,
          zoom: `19`,
          nickname: `mapa`,
          markers: [
            {
              location: `44.86818474209635,17.66247939510649`,
            }
          ]
      },
  },
  ],
}
