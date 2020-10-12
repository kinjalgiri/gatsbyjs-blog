import React from "react"
import { Link } from "gatsby"

const Card = ({ blog }) => {
  return (
    <div className="case">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
          <Link
            to={`/blog/${blog.node.uid}`}
            className="img w-100 mb-3 mb-md-0"
            style={{ backgroundImage: `url(${blog.node.image.publicURL})` }}
          ></Link>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
          <div className="text w-100 pl-md-3">
            <span className="subheading">{blog.node.category.name}</span>
            <h2>
              <Link
                to={`/blog/${blog.node.uid}`} >
                {blog.node.title}
              </Link>
            </h2>
            <ul className="media-social list-unstyled">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a>
              </li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a>
              </li>
            </ul>
            <div className="meta">
              <p className="mb-0"><a href="#">11/13/2019</a> | <a href="#">12 min read</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card
