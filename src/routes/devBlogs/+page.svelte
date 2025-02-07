<script lang="ts">
  import BlogListItem from "$lib/components/BlogListItem.svelte"

  const { data } = $props()
  const { blogs } = data

</script>

<div class="card bgblur col">
  <h1>devblogs!!</h1>
  <hr />
  <div class="blogList">
    <ul>
      {#each blogs as blog, i (i)}
        <li> <BlogListItem {blog} /> </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .card {
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    max-width: 950px;
    padding: 1rem;
    margin: 1rem;
  }
  hr { margin: 1rem 0; }
  li, ul {
    all: unset;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>