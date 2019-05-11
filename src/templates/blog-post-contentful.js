import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout/layout'
import Title from '../components/Title/title'
import styles from './blog-post-contentful.module.scss'

export default ({ data }) => {
   const post = data.contentfulPost

   // TODO: Change background image source
   return (
      <Layout>
        <div className={styles.container}>
          <Title text={post.title}></Title>
          <div style={{ width: '100%', marginBottom: '20px' }}><Img fluid={post.image.fluid} alt={post.image.title}/></div>
          
          {/* <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?computer)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div> */}
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