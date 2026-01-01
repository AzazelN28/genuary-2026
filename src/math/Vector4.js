export class Vector4 {
  static create(x, y, z, w) {
    return new Vector4(x, y, z, w)
  }

  static from({ x, y, z, w }) {
    return this.create(x, y, z, w)
  }

  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
    this.w = w || 1
  }

  get length() {
    return Math.hypot(this.x, this.y, this.z)
  }

  set(x, y, z, w) {
    this.x = x ?? this.x
    this.y = y ?? this.y
    this.z = z ?? this.z
    this.w = w ?? this.w
    return this
  }

  copy({ x, y, z, w }) {
    return this.set(x, y, z, w)
  }

  clone() {
    return new Vector4(this.x, this.y, this.z, this.w)
  }

  add({ x, y, z, w }, all) {
    return this.set(
      this.x + x,
      this.y + y,
      this.z + z,
      all ? this.w + w : this.w
    )
  }

  subtract({ x, y, z, w }, all) {
    return this.set(
      this.x - x,
      this.y - y,
      this.z - z,
      all ? this.w - w : this.w
    )
  }

  multiply({ x, y, z, w }, all) {
    return this.set(
      this.x * x,
      this.y * y,
      this.z * z,
      all ? this.w * w : this.w
    )
  }

  divide({ x, y, z, w }, all) {
    return this.set(
      this.x / x,
      this.y / y,
      this.z / z,
      all ? this.w / w : this.w
    )
  }

  normalize(all) {
    const l = this.length
    return this.set(
      this.x / l,
      this.y / l,
      this.z / l,
      all ? this.w / l : this.w
    )
  }

  negate(all) {
    return this.set(
      -this.x,
      -this.y,
      -this.z,
      all ? -this.w : this.w
    )
  }

  toFixed(fractionDigits = 0) {
    return `Vector4(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}, ${this.z.toFixed(fractionDigits)}, ${this.w.toFixed(fractionDigits)})`
  }

  toString() {
    return `Vector4(${this.x}, ${this.y}, ${this.z}, ${this.w})`
  }
}

export default Vector4
