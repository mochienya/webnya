<script lang="ts">
  import { base } from "$app/paths"
  import LinkButton from "$lib/components/LinkButton.svelte"

// const hamburgerElement = $state()
</script>

<div class="navButtons row">
  {#each [
    ["home", `${base}/`],
    ["degen", `${base}/degeneracy`],
    ["devblogs", `${base}/devBlogs`],
  ] as [label, href], i (i)}
    <LinkButton {label} {href} />
  {/each}
</div>

<!-- <div id="hamburger">
  <dialog>

  </dialog>
  <button aria-label="show/hide navigation menu">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </button>
</div> -->

<style lang="scss">

.navButtons {
  align-items: center;
  gap: 0.5rem;
  }

  // #hamburger { display: none; }

  // @media (max-width: 600px) {

  // }
</style>