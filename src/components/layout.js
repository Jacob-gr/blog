import React from 'react'
import styles from './layout.module.scss'
import footerStyles from './footer.module.scss'
import Header from './header'
import Footer from './footer'

export default ({ children }) => (
    <div>
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>

        <div className={footerStyles.container}>
            <Footer>
                <small>&copy; Copyright 2019, Jacob Gray</small>
            </Footer>
        </div>
    </div>
)