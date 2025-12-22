import { suite, test, expect } from 'vitest'
import { Random } from './lcg'

suite('Random', () => {
  test('should create a new random generator', () => {
    const random = new Random()
    expect(random.seed).toBe(0)
    expect(random.next()).toBe(0.000005748588591814041)
  })

  test('should reset a random generator', () => {
    const random = new Random()
    expect(random.seed).toBe(0)
    expect(random.next()).toBe(0.000005748588591814041)
    expect(random.reset(0)).toBe(random)
    expect(random.next()).toBe(0.000005748588591814041)
  })

  test('should generate a series of random numbers without exceeding 1', () => {
    const random = new Random()
    for (let i = 0; i < 10_000; i++) {
      const value = random.next()
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })

  test('should return a floating number between min and max', () => {
    const random = new Random()
    for (let i = 0; i < 10_000; i++) {
      const value = random.float(0.25, 0.75)
      expect(value).toBeGreaterThanOrEqual(0.25)
      expect(value).toBeLessThan(0.75)
    }
  })

  test('should return an integer number between min and max', () => {
    const random = new Random()
    for (let i = 0; i < 10_000; i++) {
      const value = random.int(25, 75)
      expect(value).toBeGreaterThanOrEqual(25)
      expect(value).toBeLessThan(75)
    }
  })

  test('should return an index', () => {
    const random = new Random()
    for (let i = 0; i < 10_000; i++) {
      const value = random.index(75)
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(75)
    }
  })

  test('should return an index of a list', () => {
    const random = new Random()
    const list = [1, 2, 3, 4, 5]
    for (let i = 0; i < 10_000; i++) {
      const value = random.indexOf(list)
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(list.length)
    }
  })

  test('should return a value of a list', () => {
    const random = new Random()
    const list = [1, 2, 3, 4, 5]
    for (let i = 0; i < 10_000; i++) {
      const value = random.valueOf(list)
      expect(value).toBeOneOf(list)
    }
  })
})
