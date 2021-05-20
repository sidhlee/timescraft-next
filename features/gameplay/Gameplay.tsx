import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { passQuestion, failQuestion } from './gameplaySlice';
import AnswerButtons from './AnswerButtons';
import HeadsUpDisplay from './HeadsUpDisplay';
import QuestionDisplay from './QuestionDisplay';

const Gameplay: React.FC = () => {
  const life = useAppSelector((state) => state.gameplay.life);
  const currentQuestionIndex = useAppSelector(
    (state) => state.gameplay.currentQuestionIndex
  );

  const currentQuestion = useAppSelector((state) => {
    const { selectedQuestionLookups, currentQuestionIndex, tables } =
      state.gameplay;

    const { tableIndex, byIndex } =
      selectedQuestionLookups[currentQuestionIndex];

    return tables[tableIndex][byIndex];
  });

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const timer = setTimeout(() => {}, 1000);
  // }, []);

  const evaluateAnswer = (correct: boolean) => {
    if (correct) {
      dispatch(passQuestion());
    } else {
      dispatch(failQuestion());
    }
  };

  return (
    <section className="sc-play page">
      <header className="header">
        <div className="logo">
          <img src="./assets/images/logo-timescraft.png" alt="TimesCraft" />
        </div>
      </header>
      <QuestionDisplay question={currentQuestion} />
      <HeadsUpDisplay life={life} currentQuestionIndex={currentQuestionIndex} />
      <AnswerButtons
        question={currentQuestion}
        evaluateAnswer={evaluateAnswer}
      />
    </section>
  );
};

export default Gameplay;
