import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations for more information about preprocessors
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },

  preprocess: [vitePreprocess(), mdsvex({ extensions: [".md"] })],
  extensions: [".svelte", ".md"],
}

export default config