/**
 * Creates a new shader
 *
 * @param {WebGL2RenderingContext} gl
 * @param {number} type
 * @param {string} source
 * @returns {WebGLShader}
 */
export function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader))
  }
  return shader
}

/**
 * Creates a new vertex shader
 *
 * @param {WebGL2RenderingContext} gl
 * @param {string} source
 * @returns {WebGLShader}
 */
export function createVertexShader(gl, source) {
  return createShader(gl, gl.VERTEX_SHADER, source)
}

/**
 * Creates a new fragment shader
 *
 * @param {WebGL2RenderingContext} gl
 * @param {string} source
 * @returns {WebGLShader}
 */
export function createFragmentShader(gl, source) {
  return createShader(gl, gl.FRAGMENT_SHADER, source)
}

/**
 * Creates a new program
 *
 * @param {WebGL2RenderingContext} gl
 * @param {WebGLShader} vertexShader
 * @param {WebGLShader} fragmentShader
 * @returns {WebGLProgram}
 */
export function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program))
  }
  return program
}

/**
 * Creates a new program from source
 *
 * @param {WebGL2RenderingContext} gl
 * @param {string} vertexShaderSource
 * @param {string} fragmentShaderSource
 * @returns {WebGLProgram}
 */
export function createProgramFromSource(gl, vertexShaderSource, fragmentShaderSource) {
  return createProgram(
    gl,
    createVertexShader(gl, vertexShaderSource),
    createFragmentShader(gl, fragmentShaderSource)
  )
}

/**
 * Creates a new buffer
 *
 * @param {WebGL2RenderingContext} gl
 * @param {number|Float32Array} sizeOrData
 * @param {number} [target=gl.ARRAY_BUFFER]
 * @param {number} [usage=gl.STATIC_DRAW]
 * @returns {WebGLBuffer}
 */
export function createBuffer(
  gl,
  sizeOrData,
  target = gl.ARRAY_BUFFER,
  usage = gl.STATIC_DRAW
) {
  const buffer = gl.createBuffer()
  gl.bindBuffer(target, buffer)
  gl.bufferData(target, sizeOrData, usage)
  gl.bindBuffer(target, null)
  return buffer
}
