export class Vector2 {
  static create(x, y) {
    return new Vector2(x, y)
  }

  static from({ x, y }) {
    return this.create(x, y)
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.x = x || 0
    this.y = y || 0
  }

  /**
   * @type {number}
   */
  get length() {
    return Math.hypot(this.x, this.y)
  }

  /**
   * @type {number}
   */
  get angle() {
    return Math.atan2(this.y, this.x)
  }

  set(x, y) {
    this.x = x ?? this.x
    this.y = y ?? this.y
    return this
  }

  copy({ x, y }) {
    return this.set(x, y)
  }

  clone() {
    return new Vector2(this.x, this.y)
  }

  add({ x, y }) {
    return this.set(this.x + x, this.y + y)
  }

  subtract({ x, y }) {
    return this.set(this.x - x, this.y - y)
  }

  multiply({ x, y }) {
    return this.set(this.x * x, this.y * y)
  }

  divide({ x, y }) {
    return this.set(this.x / x, this.y / y)
  }

  scale(sx, sy = sx) {
    return this.set(this.x * sx, this.y * sy)
  }

  rotate(angle) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    return this.set(
      c * this.x - s * this.y,
      s * this.x + c * this.y
    )
  }

  perpLeft() {
    return this.set(this.y, -this.x)
  }

  perpRight() {
    return this.set(-this.y, this.x)
  }

  negate() {
    return this.set(-this.x, -this.y)
  }

  normalize() {
    return this.set(this.x / this.length, this.y / this.length)
  }

  dot({ x, y }) {
    return this.x * x + this.y * y
  }

  cross({ x, y }) {
    return this.x * y - this.y * x
  }

  toFixed(fractionDigits = 0) {}

  toString() {}
}
