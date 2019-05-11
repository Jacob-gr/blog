const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

module.exports = {

    siteMetadata: {
        title: 'Jacob\'s blog',
    },

    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-remark',
        'gatsby-plugin-eslint',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',

        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: 'files',
        //         path: `${__dirname}/src/markdown`,
        //     },

        // },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ckcdkp2fp9b6`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
        
        // {
        //     resolve: `gatsby-source-contentful`,
        //     options: {
        //       spaceId: `ckcdkp2fp9b6`,
        //       // Learn about environment variables: https://gatsby.dev/env-vars
        //       accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        //       host: `preview.contentful.com`,
        //     },
        // },
    ]
}