import { useAppSelector } from '../../app/hooks';
import AnswerButtons from './AnswerButtons';
import HeadsUpDisplay from './HeadsUpDisplay';
import QuestionDisplay from './QuestionDisplay';

const Gameplay: React.FC = () => {
  const life = useAppSelector((state) => state.gameplay.life);
  const currentQuestionIndex = useAppSelector(
    (state) => state.gameplay.currentQuestionIndex
  );
  // TODO: why not getting auto-complete on gameplay states?
  const currentQuestions = useAppSelector(
    (state) => state.gameplay.currentQuestions
  );
  const question = currentQuestions[currentQuestionIndex];
  return (
    <section className="sc-play page">
      <header className="header">
        <div className="logo">
          <img src="./assets/images/logo-timescraft.png" alt="TimesCraft" />
        </div>
      </header>
      <QuestionDisplay question={question} />
      <HeadsUpDisplay
        life={life}
        currentQuestionIndex={currentQuestionIndex}
        currentQuestions={currentQuestions}
      />
      <AnswerButtons question={question} />
    </section>
  );
};

export default Gameplay;
