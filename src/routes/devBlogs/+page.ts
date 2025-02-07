import { getAllBlogs } from "$lib/utils/getAllBlogs"

export async function load() {
  const blogs = (await getAllBlogs()).sort((a, b) => {
    const date1 = a.meta.date
    const date2 = b.meta.date
    switch (true) {
      case date1 < date2: return 1; break
      case date1 === date2: return 0; break
      case date1 > date2: return -1; break
      default: return 0
    }
  })
  return { blogs } // just let me return an array you cunt
}