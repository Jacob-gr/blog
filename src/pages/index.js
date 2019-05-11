import React from 'react'
import Layout from '../components/Layout/layout'
import Title from '../components/Title/title'
import ArticleList from '../components/ArticleList/article-list-contentful'

export default () => (
  <Layout>
    <Title text='Welcome'/>
    <p>
      Hello, my name is Jacob and I'm learning to create a Blog using GatsbyJS. The initial design of the blog is very basic, and it will evolve over time. Below you will find posts that I have made. Most of these posts will be about things I am working on or learning. I hope to cement my learning by writing about specific topics. 
    </p>
    <ArticleList />
  </Layout>
)

