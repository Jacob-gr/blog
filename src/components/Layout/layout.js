import React from 'react'
import styles from './layout.module.scss'
import Header from '../Header/header.js'
import Footer from '../Footer/footer.js'

export default ({ children }) => (
   <div className={styles.container}>
      <Header />
      <div className={styles.content}>
         {children}
      </div>
      <Footer>
         <small>&copy; Copyright 2019, Jacob Gray</small>
    </Footer>
   </div>
)

