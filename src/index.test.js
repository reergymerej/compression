import * as app from '../src'

  /*
   * Look through text and find repeated "words".
   * Replace repeated "words" with pointers to previous usage.
   */
describe('finding repeated "words"', () => {})

describe('recognizing string patterns', () => {
  describe('finding instances of a pattern', () => {
    describe('when there are matches', () => {
      it('should return indices', () => {
        const input = 'asdfasdfasdf'
        const output = app.getIndicesOfPattern('as', input)
        expect(output).toEqual([0, 4, 8])
      })
    })

    describe('when there are no matches', () => {
      it('should return []', () => {
        const input = 'asdfasdfasdf'
        const output = app.getIndicesOfPattern('AS', input)
        expect(output).toEqual([])
      })
    })
  })

  describe('finding recurring strings', () => {
    it('should return a list of all uniqe string combinations', () => {
      // const input = 'abcabcabc'
      const input = 'Can you find all repeated things?  Kings and rings?  Can you call the ball who brings and sings to me?  Can you?'
      const output = app.getUniqueWords(input)
      expect(output).toEqual(['ll', ' h', '  '])
    })
  })

  describe('getMinimumDifference', () => {
    it('should return the smallest difference', () => {
      const input = [0, 3, 6, 90, 134]
      const output = app.getMinimumDifference(input)
      expect(output).toBe(3)
    })
  })

  fdescribe('getLongestWordWithMostIndices', () => {
    it('should return exactly what you think', () => {
      const input = [
        { word: 'in', indices: [0, 0, 0, 0, 0, 0] },
        { word: 'ing', indices: [0, 0, 0, 0, 0] },
      ]
      const output = app.getLongestWordWithMostIndices(input)
      expect(output).toEqual(
        { word: 'ing', indices: [0, 0, 0, 0, 0] },
      )
    })
  })
})
