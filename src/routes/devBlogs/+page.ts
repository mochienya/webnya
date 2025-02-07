import { getAllBlogs } from "$lib/utils/getAllBlogs"

export async function load() {
  const blogs = await getAllBlogs()
  return { blogs } // just let me return an array you cunt
}