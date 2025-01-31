<script lang="ts">
  import DiscordButton from "../components/DiscordButton.svelte"
  import LinkButton from "../components/LinkButton.svelte"
  import mochie from "../images/mochienya.png"
</script>

<div class="bgblur row" id="card">
  <img src={mochie} alt="mochie!!" />

  <div class="col" id="otherSection">

    <div id="textContainer">
      <p>
        haiiii! i'm a massive tech nerd currently trying to teach myself stuff so i can get a job <br />
        i really enjoy tinkering with linux, watching shows with my gf, and talking to people
      </p>
      <!-- add more stuff here. i can't think anymore -->
    </div>

    <div id="links" class="row">
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
  #card {
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    max-width: 950px;
  }

  #otherSection {
    height: 100%;
    justify-content: space-between;
  }

  #links {
    gap: 0.5rem;
    justify-content: end;
  }
  @media (max-width: 645px) {
    #card {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>