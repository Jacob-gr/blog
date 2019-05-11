//const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')



exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
    return graphql(
    `
        {
            allContentfulPost {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }
        }
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog posts pages
        const posts = result.data.allContentfulPost.edges

        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            // TODO: Implement Previous and Next links in blog-post-contentful
            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next,
                },
            })
        })
    })


    // return new Promise(resolve => {
    //     graphql(`
    //     {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }`
    //     ).then(result => {
    //         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //             createPage({
    //                 path: node.fields.slug,
    //                 component: path.resolve('./src/templates/post.js'),
    //                 context: {
    //                     slug: node.fields.slug,
    //                 },
    //             })
    //         })
    //         resolve()
    //     })
    // })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             name: `slug`,
//             node,
//             value,
//         })

//         // const slug = createFilePath({node, getNode, basePath: 'markdown'})
//         // createNodeField({
//         //     node,
//         //     name:'slug',
//         //     value: slug,
//         // })
//     }
// }
