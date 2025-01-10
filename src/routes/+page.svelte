<div class="name">
  <h1>mochienya</h1>
  <span class="pronouns">
    she/<a href="https://f53.dev">her's</a>
  </span>
</div>

<div class="hole">
  <div class="modifiers">
    <span class="title">Modifiers</span>
    <span>such a</span>
    <span>good</span>
    <span>pretty</span>
    <span>needy</span>
    <span>slutty</span>
    <span>my</span>
    <span>little</span>
    <span>rapeworthy</span>
    <span>kissworthy</span>
    <span>chokeworthy</span>
    <span>cuddly</span>
    <span>warm</span>
    <span>cock obsessed</span>
  </div>
  <div class="things">
    <span class="title">Things</span>
    <span>bitch</span>
    <span>slut</span>
    <span>puppy</span>
    <span>dog</span>
    <span>girl</span>
    <span>princess</span>
    <span>cutie</span>
    <span>sweetie</span>
    <span>cumslut</span>
    <span>fuckpuppy</span>
    <span>puppygirlfriend</span>
    <span>lap dog</span>
  </div>
</div>

<style lang="scss">
  @use "../global.scss";
.name {
  display:flex; flex-direction: column;
  .pronouns {
    font-size: 0.8rem;
    opacity: 0.75;
  }
  a {
    all: unset;
    &:hover { text-decoration: underline; cursor: pointer }
  }
}

.hole {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: #080808;
  padding: 0.5rem;
  border-radius: 1rem;
}
.modifiers, .things {
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