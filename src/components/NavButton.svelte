<script lang="ts">
  let { buttonLabel } = $props();
</script>

<button>{buttonLabel}</button>

<style lang="scss">
button {
  background-color: #31a3d8;
  border-radius: 15px;
  border-width: 0px;
  height: min-content;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.34, 4, 0.64, 1);
  &:hover {
    scale:1.05;
    filter:brightness(1.05);
  }
}
</style>