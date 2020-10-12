import React from "react"
import { graphql } from "gatsby"

import BlogsComponent from "../components/blogs"
import Layout from "../components/layout"

export const query = graphql`
  query Category($uid: String!) {
    blogs: allStrapiBlog(filter: { category: { uid: { eq: $uid } } }) {
      edges {
        node {
          id
          uid
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(uid: { eq: $uid }) {
      id
      uid
      name
    }
  }
`

const Category = ({ data }) => {
  const blogs = data.blogs.edges
  const category = data.category.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <BlogsComponent blogs={blogs} />
        </div>
      </div>
    </Layout>
  )
}

export default Category
