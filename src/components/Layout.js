import React from 'react'
import Navbar from './Navbar'
import "../styles/global.css"
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
          title
          contact
          description
        }
      }
    }
  `)
    // const { title } = data.site.siteMetadata
    const { copyright } = data.site.siteMetadata
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>{copyright}</p>
            </footer>
        </div>
    )
}

