/**
 * Generate sequence numbers
 * @param count number
 */
export const generateSequenceNumbers = (count: number): number[] => {
  const sequences: number[] = []
  for (let i = 0; i < count; i++) {
    sequences.push(i > 1 ? sequences[i - 1] + sequences[i - 2] : i)
  }
  return sequences
}

/**
 * Sum sequence numbers
 * @param sequences number[]
 */
export const sumSequence = (sequences: number[]): number => {
  return sequences.reduce((a, b) => a + b, 0)
}
