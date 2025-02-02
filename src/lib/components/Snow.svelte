<script lang="ts">
  import { useDebounce } from "runed"
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
    const oldWidth = canvas.width
    const oldHeight = canvas.height

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const scaleWidthBy = canvas.width / oldWidth
    const scaleHeightBy = canvas.height / oldHeight
    points.forEach((point) => {
      point.scalePosition(scaleWidthBy, scaleHeightBy)
    })

    renderFrame()
  }
  const debounceHandleResize = useDebounce(handleResize, 500)

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
      ctx.fillStyle = "#ffffff7f"
      ctx.shadowColor = "#ffffffbf"
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

    scalePosition(widthScale: number, heightScale: number) {
      this.x *= widthScale
      this.y *= heightScale
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
    snowAmnt = Math.floor((250 / 1920) * canvas.width)
    points = Array.from({ length: snowAmnt }, () => new Point())
    interval = setInterval(renderFrame, 10)
  })

  onDestroy(() => {
    clearInterval(interval)
  })

</script>

<svelte:window
  onresize={debounceHandleResize}
/>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
  canvas {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: calc(100vw + 1rem);
    height: calc(100vh + 1rem);
    left: -.5rem;
    top: -.5rem;
  }
</style>