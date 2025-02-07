export async function getAllBlogs() {
  const paths = import.meta.glob("../../blogs/*.md", { eager: true })

  let blogs: any[] = []

  for (const path in paths) {
    const file = paths[path]
    const finalPath = path.split("/").at(-1)?.replace(".md", "")

    if (file && typeof file === "object" && "metadata" in file && finalPath) {
      const metadata = file.metadata
      const post = { meta: metadata, path: finalPath }
      blogs.push(post)
    }

    blogs = blogs.sort(
      (first, second) => new Date(second.meta.date).getTime() - new Date(first.meta.date).getTime()
    )
  }
  return blogs
}