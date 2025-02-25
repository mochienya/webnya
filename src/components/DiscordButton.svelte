<script lang="ts">
  let timeoutId: Timer | undefined
  let copiedMessageShown = $state(false)
  function onclick() {
    clearTimeout(timeoutId)
    navigator.clipboard.writeText("mochienya")
    copiedMessageShown = true
    timeoutId = setTimeout(() => {
      copiedMessageShown = false
    }, 1250)
  }
</script>

<div class="big">
  {#if copiedMessageShown}
    <span class="discordPrompt">copied~!</span>
  {:else}
    <span class="hoverPrompt discordPrompt">click to copy :3</span>
  {/if}
  <button {onclick}>
    <div class="textContainer">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
        discord
      </span>
      <span>mochienya</span>
    </div>
  </button>
</div>

<style lang="scss">
  @use "../styles/mixins.scss";

  .big {
    position: relative;
    display: flex;
    flex-direction: column;
    &:hover .hoverPrompt{
      display: unset;
    }
  }

  .discordPrompt {
    position: absolute;
    bottom: 2.5rem;
    background-color: #23a55a;
    padding: 0.25rem;
    border-radius: 0.25rem;
    align-self: center
  }
  .hoverPrompt {
    display: none;
    background-color: #505050;
    left: -0.35rem;
    right: -0.35rem;
    text-align: center;
  }

  .textContainer {
    background-color: #31a3d8;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 1.25rem;
    text-align: center;
    gap: 0.5rem;
    overflow: hidden;
    > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      transition: transform 0.2s cubic-bezier(0.37, 0, 0.63, 1);
    }
    &:hover > span {
      transform: translateY(-1.9rem);
    }
  }

  button {
    @include mixins.button;
  }
</style>
