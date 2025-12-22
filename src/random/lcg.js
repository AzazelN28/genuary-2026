export class Random {
  static #MULTIPLIER = 1103515245
  static #INCREMENT = 12345
  static #MODULUS = Math.pow(2, 31)
  static #MASK = Math.pow(2, 30) - 1

  /**
   * Linear Congruential Generator
   *
   * @param {number} x seed
   * @param {number} a multiplier
   * @param {number} c increment
   * @param {number} m modulus
   * @returns {number}
   */
  static #lcg(
    x,
    a = Random.#MULTIPLIER,
    c = Random.#INCREMENT,
    m = Random.#MODULUS
  ) {
    return (a * x + c) % m
  }

  #seed

  /**
   * Constructor
   *
   * @param {number} [initialSeed=0]
   */
  constructor(initialSeed = 0) {
    this.#seed = initialSeed
  }

  /**
   * Current random seed
   *
   * @type {number}
   */
  get seed() {
    return this.#seed
  }

  /**
   * Resets the random seed.
   *
   * @param {number} newSeed
   * @returns {Random}
   */
  reset(newSeed) {
    this.#seed = newSeed
    return this
  }

  /**
   * Next random number
   *
   * @returns {number}
   */
  next() {
    this.#seed = Random.#lcg(this.#seed)
    return (this.#seed & Random.#MASK) / Random.#MODULUS
  }

  /**
   * Returns a float between
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  float(min, max) {
    return min + this.next() * (max - min)
  }

  /**
   * Returns an integer between
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  int(min, max) {
    return Math.floor(this.float(min, max))
  }

  /**
   *
   * @param {number} sides
   * @returns {number}
   */
  roll(sides) {
    return this.index(sides) + 1
  }

  /**
   * Returns an index
   *
   * @param {number} length
   * @returns {number}
   */
  index(length) {
    return Math.floor(this.next() * length)
  }

  /**
   * Returns an index
   *
   * @param {Array} list
   * @returns {number}
   */
  indexOf(list) {
    return this.index(list.length)
  }

  /**
   * Returns a value of an array
   *
   * @param {Array} list
   * @returns {*}
   */
  valueOf(list) {
    const index = this.indexOf(list)
    return list[index]
  }

  /**
   *
   * @param {Array} list
   * @param {number} amount
   * @returns {Iterator}
   */
  *pick(list, amount = 1) {
    for (let i = 0; i < amount; i++) {
      yield this.valueOf(list)
    }
  }

  /**
   *
   * @param {Array} list
   * @param {number} amount
   * @returns {Iterator}
   */
  *take(list, amount = 1) {
    for (let i = 0; i < amount; i++) {
      const [removed] = list.splice(this.indexOf(list), 1)
      yield removed
    }
  }

  /**
   *
   * @param {number} amount
   * @returns {Iterator}
   */
  *values(amount = 1) {
    for (let i = 0; i < amount; i++) {
      yield this.next()
    }
  }
}
