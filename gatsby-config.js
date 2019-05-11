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

        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ckcdkp2fp9b6`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        
    ]
}