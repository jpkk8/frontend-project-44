import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentElement = start + i * step;
    progression.push(currentElement);
  }
  return progression;
};

const getRoundData = () => {
  const length = 10;
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 5);
  
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

const runProgression = () => {
  runEngine(description, getRoundData);
};

export default runProgression;