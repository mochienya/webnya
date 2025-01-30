<script lang="ts">
  import Icon from "@iconify/svelte";
  const { label, href, icon }: { label: string, href: string, icon?: string } = $props() // this syntax sucks
</script>

<a {href}>
  {#if icon}
    <Icon {icon}/>
  {/if}
  <span>{label}</span>
</a>

<style lang="scss">
  @use "../styles/mixins.scss";
  a {
    @include mixins.button;
  }
</style>