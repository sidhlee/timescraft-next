import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
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
    const { table, by } = selectedQuestionLookups[currentQuestionIndex];
    return tables[table][by];
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {});
  }, []);

  return (
    <section className="sc-play page">
      <header className="header">
        <div className="logo">
          <img src="./assets/images/logo-timescraft.png" alt="TimesCraft" />
        </div>
      </header>
      <QuestionDisplay question={currentQuestion} />
      <HeadsUpDisplay life={life} currentQuestionIndex={currentQuestionIndex} />
      <AnswerButtons question={currentQuestion} />
    </section>
  );
};

export default Gameplay;
