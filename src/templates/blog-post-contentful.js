import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Title from '../components/Title/title'
import styles from './blog-post-contentful.module.scss'

export default ({ data }) => {
   const post = data.contentfulPost

   return (
      <Layout>
        <div className={styles.container}>
          <Title text={post.title}></Title>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
        </div>
      </Layout>
   )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      author
      image {
        title
        fluid(maxHeight: 200, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`