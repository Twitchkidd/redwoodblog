import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BlogPostPage = () => {
  return (
    <>
      <MetaTags
        title="BlogPost"
        // description="BlogPost description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>BlogPostPage</h1>
      <p>
        Find me in <code>./web/src/pages/BlogPostPage/BlogPostPage.js</code>
      </p>
      <p>
        My default route is named <code>blogPost</code>, link to me with `
        <Link to={routes.blogPost()}>BlogPost</Link>`
      </p>
    </>
  )
}

export default BlogPostPage
