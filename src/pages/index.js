import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'


export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="banner.png" alt="" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )

}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }`

