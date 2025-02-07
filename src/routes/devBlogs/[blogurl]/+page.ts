export async function load({ params }) {
  const blog = await import(`../../../blogs/${params.blogurl}.md`)

  return {
    Content: blog.default,
    meta: blog.metadata,
  }
}