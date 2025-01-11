<script lang="ts">
  import NavButton from "../components/NavButton.svelte";
</script>

<header class="bgblur">
  <div class="columnWrapper">
    <div class="navButtons">
      {#each ["these", "buttons", "do", "nothing"] as label}
        <NavButton buttonLabel={label}></NavButton>
      {/each}
    </div>
  </div>

  <div class="columnWrapper">
    <div class="name">
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
@use "../global.scss";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.name {
  display:flex; flex-direction: column;
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