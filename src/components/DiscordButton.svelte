<script lang="ts">
    import Icon from "@iconify/svelte";

  let timeoutId: number | undefined
  function onclick() {
    clearTimeout(timeoutId)
    navigator.clipboard.writeText("mochie.nya")
    messageShown = true
    timeoutId = setTimeout(() => {
      messageShown = false
    }, 1250);
  }
  let messageShown = $state(false)
</script>

<div>
  {#if messageShown}
    <span id="copied">copied :3</span>
  {/if}
  <button {onclick}>
    <Icon icon="ic:baseline-discord"></Icon>
    <span>discord</span>
  </button>
</div>

<style lang="scss">
  @use "../styles/mixins.scss";

  div {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #copied {
    position: absolute;
    bottom: 2.5rem;
    background-color: #23a55a;
    padding: 0.25rem;
    border-radius: 0.25rem;
    align-self: center
  }

  button {
    @include mixins.button;
  }
</style>