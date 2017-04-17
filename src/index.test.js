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
      const input = 'Hello, how are you?  I am OK.  Do you know what I did today?  I caught my first flounder!  I let him go because he was a bit too small.  Did you know they have big teeth.  It was surprising.'
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

  describe('getLongestWordWithMostIndices', () => {
    it('should return exactly what you think', () => {
      const input = [
        { word: 'abcabcabc', indices: [0] },
        { word: 'abcabcab', indices: [0] },
        { word: 'abcabca', indices: [0] },
        { word: 'abc', indices: [0, 3, 6] },
        { word: 'ab', indices: [0, 3, 6] },
        { word: 'a', indices: [0, 3, 6] },
      ]
      const output = app.getLongestWordWithMostIndices(input)
      expect(output).toEqual(
        { word: 'abc', indices: [0, 3, 6] }
      )
    })
  })
})
