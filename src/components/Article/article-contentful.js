import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./article-contentful.module.scss"

export default props => (
  <Link to={props.to}>
    <article className={styles.articleBox} key={props.id}>
      <div className={styles.imageSection}>
        <Img fluid={props.image} />
      </div>
      <div className={styles.right}>
        <h3>{props.title}</h3>
        <div className={styles.date}>{props.date}</div>
        <div>{props.subtitle}</div>
      </div>
    </article>
  </Link>
)
