export async function load({ params }) {
  const blog = await import(`$lib/blogs/${params.blogurl}.md`)

  return {
    Content: blog.default,
    meta: blog.metadata,
  }
}