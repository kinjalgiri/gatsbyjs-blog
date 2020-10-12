import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query BlogQuery($uid: String!) {
    strapiBlog(uid: { eq: $uid }) {
      id
      uid
      title
      description
      createdAt
      image {
        publicURL
      }
    }
  }
`

const Blog = ({ data }) => {
  const blog = data.strapiBlog
  return (
    <Layout>
      <SEO title={blog.title} />
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={blog.image.publicURL}
          data-srcset={blog.image.publicURL}
          data-uk-img
        >
          <h1>{blog.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={blog.description} />
            <p>
              <Moment format="MMM Do YYYY">{blog.createdAt}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
