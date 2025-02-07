<script lang="ts">
  import Icon from "@iconify/svelte"

  let timeoutId: number | undefined
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
        <Icon icon="ic:baseline-discord" />
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
    // padding: 0.25rem;
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
      // transform: translateY(.125rem);
    }
    &:hover > span {
      transform: translateY(-1.9rem);
    }
  }

  button {
    @include mixins.button;
    // height: 29px;
  }
</style>
