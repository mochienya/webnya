<div id="snowContainer">
  {#each { length: 300 } as _, i (i)}
    <div class="snow"></div>
  {/each}
</div>

<style lang="scss">
@use 'sass:math';
:global {
#snowContainer {
  position: fixed;
  inset: 0;
  z-index: -1;
  scale: 1.01;
  opacity: 0.5;
}

// the following css is yoinked from https://codepen.io/alphardex/pen/dyPorwJ
@function random_range($min, $max) {
  $rand: math.random();
  $random_range: $min + math.floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 300;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px white);

  @for $i from 1 through $total {
    $random-x: math.random(1000000) * 0.0001svw;
    $random-offset: random_range(-100000, 100000) * 0.0001svw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: calc($random-x + ($random-offset / 2));
    $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: math.random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: math.random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: #{math.random(10000) * 0.0001};
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{math.percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
}
</style>