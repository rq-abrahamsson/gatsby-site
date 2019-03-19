import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  fetch("/.netlify/functions/hello")
    .then(response => response.json())
    .then(console.log)
  const page = data.contentfulPage
  return (
    <Layout>
      <div>
        <h1>{page.name}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($url: String!) {
    contentfulPage(url: { eq: $url }) {
      id
      url
      name
    }
  }
`
