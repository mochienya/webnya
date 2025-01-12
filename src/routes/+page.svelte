<script lang="ts">
  const modifiers = [
    "such a",
    "good",
    "pretty",
    "needy",
    "slutty",
    "my",
    "little",
    "rapeworthy",
    "kissworthy",
    "chokeworthy",
    "cuddly",
    "warm",
    "cock obsessed",
    "dumb",
    "adorable",
  ];
  const things = [
    "bitch",
    "slut",
    "puppy",
    "dog",
    "girl",
    "princess",
    "cutie",
    "sweetie",
    "cumslut",
    "fuckpuppy",
    "puppygirlfriend",
    "lap dog",
  ];
</script>

<div class="hole bgblur">
  <div class="wordlist">
    <span class="title">Modifiers</span>
    {#each modifiers as modifier}
      <span>{modifier}</span>
    {/each}
  </div>

  <div class="wordlist">
    <span class="title">Things</span>
    {#each things as thing}
      <span>{thing}</span>
    {/each}
  </div>
</div>

<style lang="scss">
@use "../global.scss";

.hole {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
}
.wordlist {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  > span:not(.title) {
    background-color: #1c1c1c;
    padding: 0.125rem 0.25rem;
    border-radius: 1rem;
    width: fit-content;
  }
  > * { margin: auto; }
  .title {
    font-weight: bold;
  }
}
</style>