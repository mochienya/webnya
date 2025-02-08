<script lang="ts">
  import { base } from "$app/paths"
  import LinkButton from "$lib/components/LinkButton.svelte"

  let hamburgerButton = $state() as HTMLDialogElement

  function toggleBurger() {
    if (!hamburgerButton.open) {
      hamburgerButton.show()
      return
    } hamburgerButton.close()
  }

</script>

{#snippet buttons()}
  {#each [
    ["home", `${base}/`],
    ["degen", `${base}/degeneracy`],
    ["devblogs", `${base}/devBlogs`],
  ] as [label, href], i (i)}
    <LinkButton {label} {href} />
  {/each}
{/snippet}

<div class="navButtons row">
  {@render buttons()}
</div>

<div id="hamburgerslide">
  <dialog bind:this={hamburgerButton} class="darkbgblur">
    <div class="col burgerslidebuttons"> {@render buttons()} </div>
  </dialog>
  <button onclick={toggleBurger} aria-label="show/hide navigation menu">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </button>
</div>

<style lang="scss">

  .navButtons {
    align-items: center;
    gap: 0.5rem;
  }

  #hamburgerslide { display: none; }

  @media (max-width: 645px) {
    .navButtons { display: none; }
    #hamburgerslide { display: unset; }
  }
  // never ask a girl where she gets her css from...
  #hamburgerslide {
    > button {
      all: unset;
      width: 2rem;
      height: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      > * {
        width: 100%;
        height: .25rem;
        background-color: #31a3d8;
        border-radius: 1rem;
      }

      scale: 1;
      &:hover {
        scale: 1.1;
        cursor: pointer;
      }
      &, > * { transition: all .25s ease-in; }
    }
    dialog[open] + button {
      transform: rotate(-45deg);
      .bar1 { transform: translateY(.55rem); }
      .bar2 { opacity: 0; }
      .bar3 { transform: rotate(90deg) translateX(-.55rem); }
    }
    dialog {
      position: fixed;
      top: 4rem;
      margin-right: 1rem;
      border: none;
      border-radius: 1rem;
      padding: 1.1rem;

      animation-duration: .5s;
      animation-name: slideIn;
      @keyframes slideIn {
        from { margin-left: -10rem; }
      }

      > .burgerslidebuttons {
        gap: 0.65rem;
      }

    }
  }
</style>