import * as app from '../src'

  /*
   * Look through text and find repeated "words".
   * Replace repeated "words" with pointers to previous usage.
   */
describe('finding repeated "words"', () => {})

describe('recognizing string patterns', () => {
  describe('finding instances of a pattern', () => {
    it('should return indices', () => {
      const input = 'asdfasdfasdf'
      const output = app.getIndicesOfPattern('as', input)
      expect(output).toEqual([
        0,
        4,
        8,
      ])
    })
  })
})
