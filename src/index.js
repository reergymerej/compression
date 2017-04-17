function getNextIndex(pattern, input, index) {
  return input.indexOf(pattern, index + 1)
}

export function getIndicesOfPattern(pattern, input) {
  const indices = []
  let index = getNextIndex(pattern, input, -1)
  while (index > -1) {
    indices.push(index)
    index = getNextIndex(pattern, input, index)
  }
  return indices
}

export function getMinimumDifference(numbers) {
  const differences = []
  numbers.forEach((n, i) => {
    if (i > 0) {
      differences.push(n - numbers[i - 1])
    }
  })
  return Math.min.apply(null, differences)
}

export function getLongestWordWithMostIndices(data) {
  const indexCounts = []
  data.forEach(row => {
    const count = row.indices.length
    if (indexCounts.indexOf(count) < 0) {
      indexCounts.push(count)
    }
  })
  const requiredIndicesCount = Math.max.apply(null, indexCounts)

  let currentWinner = null
  data.forEach(row => {
    if (row.indices.length === requiredIndicesCount) {
      if (!currentWinner
        || (row.word.length > currentWinner.word.length)) {
        currentWinner = row
      }
    }
  })
  return currentWinner
}

// Returns unique string patterns (of at least length n), not necessarily
// English words.
export function getUniqueWords(input) {
  const uniqueWords = []
  const possibleWords = []
  for (let i = 0; i < input.length; i++) {
    let length = input.length - i
    while (length > 1) {
      const word = input.substr(i, length)
      const indices = getIndicesOfPattern(word, input)
      const minIndexDistance = getMinimumDifference(indices)
      // To be a unique word, it must not have indices closer together than the
      // word's length.
      const overlapsWithOtherInstances = word.length > minIndexDistance
      if (!overlapsWithOtherInstances) {
        // Pick the longest word with the most indices.
        possibleWords.push({
          word,
          indices,
        })
      }
      length--
    }
    const repeatedWord = getLongestWordWithMostIndices(possibleWords)
    if (repeatedWord.word !== input) {
      if (uniqueWords.indexOf(repeatedWord.word) < 0) {
        console.log({ repeatedWord })
        uniqueWords.push(repeatedWord.word)
      }
    }
  }
  console.log(uniqueWords)
  return uniqueWords
}
