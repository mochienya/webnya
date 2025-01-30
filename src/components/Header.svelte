<script lang="ts">
  import LinkButton from "./LinkButton.svelte"
</script>

<header class="bgblur">
  <div class="columnWrapper">
    <div class="navButtons row">
      {#each [
          ["home", "/"],
          ["degen", "/degeneracy"],
        ] as [label, href] }
        <LinkButton {label} {href} />
      {/each}
    </div>
  </div>

  <div class="columnWrapper">
    <div class="name col">
      <h1>mochienya</h1>
      <span class="pronouns">
        she/<a href="https://f53.dev">her's</a>
      </span>
    </div>
  </div>

  <div class="columnWrapper">
    <div class="lightSwitch"></div>
  </div>
</header>

<style lang="scss">

header {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 33.33vw);
}

.columnWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navButtons {
  align-items: center;
  gap: 0.5rem;
}

.name {
  .pronouns {
    font-size: 0.8rem;
    opacity: 0.75;
  }
  a {
    all: unset;
    &:hover { text-decoration: underline; cursor: pointer }
  }
}
</style>