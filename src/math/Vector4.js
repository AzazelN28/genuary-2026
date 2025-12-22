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

  toFixed(fractionDigits = 0) {

  }

  toString() {

  }
}

export default Vector4
