import runEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 50) + 1
  const num2 = Math.floor(Math.random() * 50) + 1
  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))
  return [question, correctAnswer]
}

const runGcd = () => {
  runEngine(description, getRoundData)
}

export default runGcd
