import shuffle from 'lodash/shuffle';
import { Question } from './gameplaySlice';

/**
 * Returns an array of answer objects.
 * @param {{table: number, by: number }} question multiplication question (table * by = ?)
 * @param {number} size number of the answers to return
 * @returns {{value: number, correct: boolean}[]}
 */
function getAnswers(question: Question, size = 4) {
  const { table, by } = question;
  const correctAnswer = {
    value: table * by,
    correct: true,
  };
  const wrongAnswers = getWrongAnswers(question, size - 1);
  const answers = wrongAnswers.concat(correctAnswer);

  return shuffle(answers);
}

/**
 * Get wrong answers from the current table.
 * @param {{table: number, by: number }} question
 * @param {number} size number of wrong answers to return
 * @returns {{value: number, correct: boolean}[]}
 */
function getWrongAnswers(question: Question, size = 3) {
  const wrongAnswers = [2, 3, 4, 5, 6, 7, 8, 9]
    .filter((by) => by !== question.by)
    .map((by) => ({
      value: question.table * by,
      correct: false,
    }));

  return shuffle(wrongAnswers).slice(0, size);
}

type AnswerButtonsProps = {
  question: Question;
  evaluateAnswer: (correct: boolean) => void;
};

const AnswerButtons: React.FC<AnswerButtonsProps> = ({
  question,
  evaluateAnswer,
}) => {
  const answers = getAnswers(question);
  const answerButtons = answers.map((answer) => (
    <button
      key={answer.value}
      className="btn"
      onClick={() => evaluateAnswer(answer.correct)}
    >
      {answer.value}
    </button>
  ));
  return <div className="answer-buttons">{answerButtons}</div>;
};

export default AnswerButtons;
