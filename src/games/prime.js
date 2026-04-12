import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRoundData = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
runEngine(description, getRoundData);
};