import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Blogs from "../components/blogs"

const IndexPage = () => (
  <Layout>
    <div className="hero-wrap js-fullheight home-page-header-image" 
      data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
          data-scrollax-parent="true">
          <div className="col-md-12 ftco-animate">
            <h2 className="subheading">Hello! Welcome to</h2>
            <h1 className="mb-4 mb-md-0">Readit blog</h1>
            <div className="row">
              <div className="col-md-7">
                <div className="text">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
									at the coast of the Semantics, a large language ocean.</p>
                  <div className="mouse">
                    <a href="#" className="mouse-icon">
                      <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <StaticQuery
      query={graphql`
        query {
          allStrapiBlog {
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
        }
      `}
      render={data => (
            <Blogs blogs={data.allStrapiBlog.edges} />
      )}
    />
  </Layout>
)

export default IndexPage
