import { onCleanup, onMount } from 'solid-js'
import { mod, rand } from '../utils/functions.ts'
import '../styles/snow.scss'

interface Pos { x: number, y: number }

let canvas!: HTMLCanvasElement
let ctx!: CanvasRenderingContext2D
const flakeTexSize = 40
const maxSpeed = 0.012
let lastTime = 0
let animationId = 0
let renderPercentage = 1

function handleResize() {
  renderPercentage = Math.min(window.innerWidth / 3840, 1)
  const oldWidth = canvas.width
  const oldHeight = canvas.height

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const widthScalar = canvas.width / oldWidth
  const heightScalar = canvas.height / oldHeight
  let i = 0
  while (i < Flake.flakes.length) {
    const flake = Flake.flakes[i]
    flake.scalePosition(widthScalar, heightScalar)
    i++
  }
  ctx.fillStyle = '#0c0c0c'
}

class Flake {
  pos: Pos
  vel: Pos
  readonly size: number
  readonly blur: number
  readonly alpha: number
  readonly tex: OffscreenCanvas

  static flakes: Flake[] = []

  constructor() {
    this.pos = {
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
    }
    this.vel = {
      x: rand(-maxSpeed, maxSpeed),
      y: (rand(0.1, maxSpeed) + rand(0.1, maxSpeed)) / 2,
    }
    this.size = rand(0.5, 6)
    this.blur = (this.size * 2.5) + 2
    this.alpha = rand(0.1, 1)
    this.tex = this.makeFlakeTex()
    Flake.flakes.push(this)
  }

  makeFlakeTex(): OffscreenCanvas {
    const canvas = new OffscreenCanvas(flakeTexSize, flakeTexSize)
    const ctx = canvas.getContext('2d')!

    ctx.shadowBlur = this.blur
    ctx.globalAlpha = this.alpha
    ctx.fillStyle = '#ffffff7f'
    ctx.shadowColor = '#ffffffbf'

    ctx.beginPath()
    ctx.arc(
      flakeTexSize / 2,
      flakeTexSize / 2,
      this.size,
      0,
      360
    )
    ctx.fill()
    ctx.closePath()

    return canvas
  }

  move(deltaTime: number) {
    this.pos.x = mod(this.pos.x + this.vel.x * deltaTime, canvas.width)
    this.pos.y = mod(this.pos.y + this.vel.y * deltaTime, canvas.height)
  }

  scalePosition(widthScalar: number, heightScalar: number) {
    this.pos.x *= widthScalar
    this.pos.y *= heightScalar
  }
}

export function Snow() {
  function render(time: number) {
    const deltaTime = time - lastTime
    lastTime = time
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let i = 0
    while (i < Flake.flakes.length * renderPercentage) {
      const flake = Flake.flakes[i]
      flake.move(deltaTime)
      ctx.drawImage(flake.tex, flake.pos.x - flakeTexSize / 2, flake.pos.y - flakeTexSize / 2, flake.tex.width, flake.tex.height)
      i++
    }
    requestAnimationFrame(render)
  }

  onMount(() => {
    ctx = canvas.getContext('2d', { alpha: false })!
    handleResize()

    if (Flake.flakes.length === 0) {
      for (let i = 0; i < 500; i++)
        new Flake()
    }
    addEventListener('resize', handleResize)
    animationId = requestAnimationFrame(render)
  })
  onCleanup(() => {
    removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationId)
  })

  return <canvas ref={canvas}>haiii</canvas>
}
