export function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function mod(n: number, d: number) {
  return ((n % d) + d) % d
}
