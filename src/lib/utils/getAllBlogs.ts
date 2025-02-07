export async function getAllBlogs() {
  const paths = import.meta.glob("$lib/blogs/*.md", { eager: true })

  const filesArray = Object.entries(paths)
  const finalObj = await Promise.all(
    filesArray.map(async ([path, metadataPromise]) => { // 2d array basically equivalent to { $lib/blogs/blog.md: (metadata of the file) }
      if (path.includes("png")) { return }
      const { metadata } = await metadataPromise()

      const finalPath = `${/(\w+)(?=\.md$)/.exec(path)}`

      return {
        meta: metadata,
        path: finalPath,
      }
    })
  )
  return finalObj
}