import React from "react"
import Layout from "../components/Layout/layout"
import Title from "../components/Title/title"
import ArticleList from "../components/ArticleList/article-list-contentful"

export default () => (
  <Layout>
    <Title text="Welcome" />
    <p>
      Hello, my name is Jake and you have somehow found my project blog. This is
      a personal blog for me to document on things I am learning or resources
      which I find helpful. Additionally, I'll be using this blog to work on my
      webdev and JavaScript skills. I should also strive to learn more about
      design, but for the time being we are going for function over form on this
      blog!
    </p>
    <ArticleList />
  </Layout>
)
