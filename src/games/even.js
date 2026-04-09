import runEngine from '../index.js';

// Правила игры
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на четность (предикат)
const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100); // Случайное число от 0 до 99
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  
  return [question, correctAnswer]; // Возвращаем вопрос и ответ в движок
};

export default () => {
  runEngine(description, getRoundData);
};