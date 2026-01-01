import { Vector4 } from '~/math/Vector4'

export class Color extends Vector4 {
  static random(r, g, b, a) {
    return new Color(Math.random() * r, Math.random() * g, Math.random() * b, Math.random() * a)
  }

  get r() { return this.x }
  set r(value) { this.x = value }

  get g() { return this.y }
  set g(value) { this.y = value }

  get b() { return this.z }
  set b(value) { this.z = value }

  get h() { return this.x }
  set h(value) { this.x = value }

  get s() { return this.y }
  set s(value) { this.y = value }

  get l() { return this.z }
  set l(value) { this.z = value }

  get a() { return this.w }
  set a(value) {this.w = value }

  toFixed(format, fractionDigits = 0) {
    switch (format) {
      case 'hsl':
        return `hsl(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}%, ${this.z.toFixed(fractionDigits)}%)`
      case 'hsla':
        return `hsla(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}%, ${this.z.toFixed(fractionDigits)}%, ${this.w.toFixed(fractionDigits)})`
      case 'rgb':
        return `rgb(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}, ${this.z.toFixed(fractionDigits)})`
      case 'rgba':
      default:
        return `rgba(${this.x.toFixed(fractionDigits)}, ${this.y.toFixed(fractionDigits)}, ${this.z.toFixed(fractionDigits)}, ${this.w.toFixed(fractionDigits)})`
    }
  }

  toString(format) {
    switch(format) {
      case 'hsl':
        return `hsl(${this.x}, ${this.y}%, ${this.z}%)`
      case 'hsla':
        return `hsla(${this.x}, ${this.y}%, ${this.z}%, ${this.w})`
      case 'rgb':
        return `rgb(${this.x}, ${this.y}, ${this.z})`
      case 'rgba':
      default: return `rgba(${this.x}, ${this.y}, ${this.z}, ${this.w})`
    }
  }
}
