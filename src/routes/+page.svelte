<script lang="ts">
  import { base } from "$app/paths"
  import DiscordButton from "$lib/components/DiscordButton.svelte"
  import LinkButton from "$lib/components/LinkButton.svelte"
</script>

<div class="bgblur row card">
  <img src={`${base}/assets/mochienya.png`} alt="mochie!!" />

  <div class="col otherSection">

    <div class="textContainer darkbgblur">
      <p>
        haiiii! i'm a massive tech nerd currently trying to teach myself stuff so i can get a job <br />
        i really enjoy tinkering with linux, watching shows with my gf, and talking to people
      </p>
      <p>
        The mochie knows where she is at all times.
        She knows this because she's in her master's arms.
      </p>
      <!-- add more stuff here. i can't think anymore -->
    </div>

    <div class="row links">
      <DiscordButton />

      {#each [
        ["bluesky", "https://bsky.app/profile/mochie.being.dog", "mingcute:bluesky-social-fill"],
        ["source", "https://github.com/mochienya/webnya", "mdi:github"],
      ] as [label, href, icon], i (i)}
        <LinkButton {label} {href} {icon} />
      {/each}

    </div>
  </div>
</div>

<style lang="scss">
  img { width: 320px; height: 320px; }
  .card {
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    max-width: 950px;
    padding: 1rem;
    margin: 1rem;
  }

  .textContainer {
    padding: 0.65rem;
    border-radius: 10px;
  }

  .otherSection {
    height: 100%;
    justify-content: space-between;
  }

  .links {
    gap: 0.5rem;
    justify-content: end;
  }
  @media (max-width: 645px) {
    .card {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>