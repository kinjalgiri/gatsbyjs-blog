exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        blogs: allStrapiBlog {
          edges {
            node {
              id
              uid
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blogs pages.
  const blogs = result.data.blogs.edges
  const categories = result.data.categories.edges

  //Single blog page query and path
  blogs.forEach((blog, index) => {
    createPage({
      path: `/blog/${blog.node.uid}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        uid: blog.node.uid,
      },
    })
  })

  //blog listing by category
  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.uid}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        uid: category.node.uid,
      },
    })
  })

}

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}