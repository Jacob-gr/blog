import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from '../Article/article-contentful'

export default () => (
   <StaticQuery

      query = { graphql `query {
         allContentfulPost(sort: {fields: [date] order: DESC}) {
            totalCount
            edges {
               node {
                  id
                  title
                  subtitle
                  image {
                     fluid {
                        ...GatsbyContentfulFluid
                     }
                  }
                  slug
                  date (formatString: "D MMM YYYY")
               }
            }
          }
       }`

      }

      render = { data => (
         <div>
            {data.allContentfulPost.edges.map(({ node }) => (
               <Article id={node.id}
                  to={node.slug}
                  title={node.title}
                  subtitle={node.subtitle}
                  image={node.image.fluid}
                  date={node.date}
                  excerpt={node.subtitle} />
            ))}
         </div>
      )}

   />
)