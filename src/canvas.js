/**
 * Resizes a canvas
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} width
 * @param {number} height
 * @returns {boolean}
 */
export function resize(
  canvas,
  width = Math.floor(
    canvas.parentElement.clientWidth * window.devicePixelRatio
  ),
  height = Math.floor(
    canvas.parentElement.clientHeight * window.devicePixelRatio
  )
) {
  let resized = false
  if (canvas.width !== width) {
    canvas.width = width
    resized = true
  }
  if (canvas.height !== height) {
    canvas.height = height
    resized = true
  }
  return resized
}
