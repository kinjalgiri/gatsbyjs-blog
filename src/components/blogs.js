import React from "react"
import Card from "./card"

class Blogs extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    const { blogs } = this.props
    console.log("data", blogs);
    //const blogs = data.blogs.edges

    return(
      <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {blogs.map((blog, i) => {
              return (
                <Card blog={blog} key={`blog__${blog.node.id}`} />
              )
            })}
          </div>
        </div>
        <div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Blogs