import './style.css'
import { resize } from './canvas.js'
import { linear } from './math/Interpolation.js'
import { Color } from './color/Color.js'

console.log('Genuary 01')

// GLSL day. Create an artwork using only shaders.
const canvas = document.querySelector('canvas')
const cx = canvas.getContext('2d')

/**
 *
 * @param {number} time
 */
function update(time) {

}

/**
 * Render the shape.
 *
 * @param {number} time
 * @param {CanvasRenderingContext2D} cx
 */
function render(time, cx) {
  cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)

  cx.save()

  cx.translate(cx.canvas.width / 2, cx.canvas.height / 2)

  cx.beginPath()

  const size = Math.min(cx.canvas.width, cx.canvas.height) * 0.25
  const count = Math.floor(5 + (Math.random() * 20))
  const randomDistanceX = size * (0.5 + Math.random() * 0.4)
  const randomDistanceY = size * (0.5 + Math.random() * 0.4)
  for (let index = 0; index <= count; index++) {
    const progress = index / count
    const angle = Math.PI * 2 * progress
    const randomDistance = size * ((Math.random() * 0.25) + Math.random() + 1)
    const distance = size
    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance
    const randomX = Math.cos(angle) * randomDistance
    const randomY = Math.sin(angle) * randomDistance
    if (index === 0) {
      cx.moveTo(x, y)
    } else {
      cx.quadraticCurveTo(
        randomX,
        randomY,
        x,
        y
      )
    }
  }

  cx.fillStyle = `hsla(${linear(Math.random(), 0, 360)}, 50%, 50%, 1)`
  cx.fill()

  cx.closePath()

  cx.globalCompositeOperation = 'destination-out'
  cx.beginPath()
  cx.ellipse(0, 0, randomDistanceX, randomDistanceY, Math.PI * 2 * Math.random(), 0, Math.PI * 2)
  cx.closePath()
  cx.fill()

  cx.restore()
}

let frameId
function onFrame(time) {
  resize(canvas)
  update(time)
  render(time, cx)
  // frameId = requestAnimationFrame(onFrame)
}

function start() {
  frameId = requestAnimationFrame(onFrame)
}

start()
