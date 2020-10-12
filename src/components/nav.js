import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <nav className="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <Link className="navbar-brand" to="/">Kinjalgiri Goswami</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
  </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>

          <StaticQuery
            query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        id
                        uid
                        name
                      }
                    }
                  }
                }
              `}
            render={data =>
              data.allStrapiCategory.edges.map((category, i) => {
                return (
                  <li className="nav-item" key={category.node.id}>
                    <Link className="nav-link" to={`/category/${category.node.uid}`}>
                      {category.node.name}
                    </Link>
                  </li>
                )
              })
            }
          />
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav
