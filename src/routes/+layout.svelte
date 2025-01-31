<script lang="ts">
  import { base } from "$app/paths"

  const { children } = $props()
  import Header from "../components/Header.svelte"
  import Snow from "../components/Snow.svelte"
</script>

<svelte:head>
  <title>mochienya</title>

  <link rel="apple-touch-icon" sizes="180x180" href={`${base}/apple-touch-icon.png`} />
  <link rel="icon" type="image/png" sizes="32x32" href={`${base}/favicon-32x32.png`} />
  <link rel="icon" type="image/png" sizes="16x16" href={`${base}/favicon-16x16.png`} />
  <link rel="manifest" href={`${base}/site.webmanifest`} />

  <meta name="theme-color" content="#05afff" />
  <meta name="description" content="loyal nerdy puppygirlfriend" />
  <meta property="og:description" content="loyal nerdy puppygirlfriend" />
  <meta name="author" content="mochienya" />
  <meta property="og:title" content="mochienya" />
  <meta property="og:image" content={`${base}/android-chrome-512x512.png`} />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<Header />

<Snow />
<main>
  {@render children()}
</main>

<style lang="scss">
  @use "../styles/global.scss";
</style>