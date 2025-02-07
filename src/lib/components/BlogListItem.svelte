<script lang="ts">
  import { page } from "$app/state"

  const { blog }: { blog: { meta: any, path: string } } = $props()

</script>

<a class="link" href={`${page.url.pathname}/${blog.path}`}>
  <div class="row spacebetween bgblur listElement">
    <div class="col">
      <h2>{blog.meta.title}</h2>
      <span>{blog.meta.description}</span>
    </div>
    <div class="col">
      <span>{blog.meta.date}</span>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    all: unset;
    display: contents;
  }
  .link {
    &, & > * {
      text-decoration: none;
    }
  }

  span {
    color: #c4c4c4;
  }

  .listElement {
    background-color: rgba(0, 0, 0, 0.301);
    padding: 0.4rem;
    border-radius: 10px;
    transition: scale 0.6s cubic-bezier(0.34, 1.54, 0.64, 1);
    &:hover {
      cursor: pointer;
      scale: 1.03;
    }
  }
</style>