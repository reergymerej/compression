export function getIndicesOfPattern(pattern, input) {
  const indices = []
  let index = -1
  do {
    index = input.indexOf(pattern, index + 1)
    if (index > -1) {
      indices.push(index)
    }
  } while (index > -1)
  return indices
}

