import './style.css'
import { createProgramFromSource, createBuffer } from './gl.js'
import { resize } from './canvas.js'

console.log('Genuary 31')

// GLSL day. Create an artwork using only shaders.
const canvas = document.querySelector('canvas')
const gl = canvas.getContext('webgl2')

const vertexShaderSource = `#version 300 es

precision highp float;

in vec2 a_position;
out vec2 v_position;

void main() {
  gl_PointSize = 35.0;
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_position = (a_position + 1.0) * 0.5;
}
`

const fragmentShaderSource = `#version 300 es

precision highp float;

in vec2 v_position;
out vec4 fragColor;

uniform float u_time;

void main() {
  vec2 time_dir = vec2(
    (cos(u_time) + 1.0) * 0.5,
    (sin(u_time) + 1.0) * 0.5
  );
  fragColor = vec4((v_position + time_dir) * 0.5, 0.0, 1.0);
}
`

const program = createProgramFromSource(
  gl,
  vertexShaderSource,
  fragmentShaderSource
)
const u_time = gl.getUniformLocation(program, 'u_time')
const a_position = gl.getAttribLocation(program, 'a_position')

const buffer = createBuffer(gl, new Float32Array([
  -1.0, -1.0,
   1.0, -1.0,
  -1.0,  1.0,
   1.0,  1.0,
]))

/**
 *
 * @param {number} time
 */
function update(time) {

}

/**
 *
 * @param {number} time
 * @param {WebGL2RenderingContext} gl
 */
function render(time, gl) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  gl.useProgram(program)

  gl.uniform1f(u_time, time / 1000)

  gl.enableVertexAttribArray(a_position)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, gl.FALSE, 0, 0)

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}

let frameId
function onFrame(time) {
  resize(canvas)
  update(time)
  render(time, gl)
  frameId = requestAnimationFrame(onFrame)
}

function start() {
  frameId = requestAnimationFrame(onFrame)
}

start()
