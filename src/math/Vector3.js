export class Vector3 {
  static create(x, y, z) {
    return new Vector3(x, y, z)
  }

  static from({ x, y, z }) {
    return this.create(x, y, z)
  }

  constructor(x = 0, y = 0, z = 0) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
  }

  get length() {
    return Math.hypot(this.x, this.y, this.z)
  }

  set(x, y, z) {
    this.x = x ?? this.x
    this.y = y ?? this.y
    this.z = z ?? this.z
    return this
  }

  copy({ x, y, z }) {
    return this.set(x, y, z)
  }

  clone() {
    return new Vector3(this.x, this.y, this.z)
  }

  add({ x, y, z }) {
    return this.set(this.x + x, this.y + y, this.z + z)
  }

  subtract({ x, y, z }) {
    return this.set(this.x - x, this.y - y, this.z - z)
  }

  multiply({ x, y, z }) {
    return this.set(this.x * x, this.y * y, this.z * z)
  }

  divide({ x, y, z }) {
    return this.set(this.x / x, this.y / y, this.z / z)
  }

  toFixed(fractionDigits = 0) {
    return `Vector3(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(
      fractionDigits
    )}, ${this.z.toFixed(fractionDigits)})`
  }

  toString() {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`
  }
}
