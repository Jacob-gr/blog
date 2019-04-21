module.exports = {

    siteMetadata: {
        title: 'Modern Gatsby blog',
    },

    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-remark',
        'gatsby-plugin-eslint',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'files',
                path: `${__dirname}/src/markdown`,
            },
        },
    ]
}