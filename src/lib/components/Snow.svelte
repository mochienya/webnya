<script lang="ts">
  import { debounce } from "$lib/utils/debounce"
  import { onDestroy, onMount } from "svelte"

  let ctx!: CanvasRenderingContext2D
  let canvas!: HTMLCanvasElement
  const maxSpeed = 0.12

  function rand(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  function mod(n: number, d: number) {
    return ((n % d) + d) % d
  }

  function handleResize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    renderFrame()
  }
  const debounceHandleResize = debounce(handleResize, 500)

  class Point {
    x: number
    y: number
    velocity: { x: number, y: number }
    readonly size: number
    readonly blur: number
    readonly alpha: number

    constructor() {
      this.x = rand(0, canvas.width)
      this.y = rand(0, canvas.height)
      this.velocity = {
        x: rand(-maxSpeed, maxSpeed),
        y: (rand(1, maxSpeed) + rand(1, maxSpeed)) / 2,
      }
      this.size = rand(0.5, 6)
      this.blur = (this.size * 2.5) + 2
      this.alpha = rand(0.1, 1)
    }

    drawPoint() {
      ctx.shadowBlur = this.blur
      ctx.globalAlpha = this.alpha
      ctx.beginPath()
      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        360,
      )
      ctx.fill()
      ctx.closePath()
    }
  }

  let snowAmnt: number
  let points: Point[]

  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    points.forEach((i) => {
      i.x = mod((i.x + i.velocity.x), canvas.width)
      i.y = mod((i.y + i.velocity.y), canvas.height)
      i.drawPoint()
    })
  }
  let interval: number

  onMount(() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext("2d")!
    ctx.fillStyle = "#ffffff7f"
    ctx.shadowColor = "#ffffffbf"
    snowAmnt = Math.floor((250 / 1920) * canvas.width)
    points = Array.from({ length: snowAmnt }, () => new Point())
    interval = setInterval(renderFrame, 10)
    addEventListener("resize", debounceHandleResize)
  })

  onDestroy(() => {
    clearInterval(interval)
    removeEventListener("resize", debounceHandleResize)
  })

</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
  canvas {
    position: fixed;
    inset: 0;
    z-index: -1;
    scale: 1.1
  }
</style>