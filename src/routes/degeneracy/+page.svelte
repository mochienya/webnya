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
    "loyal",
  ]
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
  ]
</script>

<div class="card bgblur">
  <div class="wordlist">
    <span class="title">Modifiers</span>
    <div class="listcontent col darkbgblur">
      {#each modifiers as modifier, i (i)}
        <span class="listitem">{modifier}</span>
      {/each}
    </div>
  </div>

  <div class="wordlist">
    <span class="title">Things</span>
    <div class="listcontent col darkbgblur">
      {#each things as thing, i (i)}
        <span class="listitem">{thing}</span>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">

.card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
}
.wordlist {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  gap: 0.75rem;
  > * { margin: 0 auto; }
  .title {
    font-weight: bold;
    padding: 0.25rem 0rem;
  }
  .listitem {
    padding: 0.125rem 0.25rem;
    border-radius: 1rem;
    width: fit-content;
  }
  .listcontent {
    align-items: center;
    justify-content: space-around;
    padding: 0.2rem;
    border-radius: 10px;
    height: 100%;
  }
}
</style>