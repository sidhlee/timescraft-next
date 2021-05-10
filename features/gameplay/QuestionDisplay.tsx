import { Question } from './gameplaySlice';
import { mobs } from './mobs';

type QuestionDisplayProps = {
  question: Question;
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  const { table, by, difficulty } = question;
  const mob = mobs.find((mob) => mob.difficulty === difficulty);

  return (
    <div className="question">
      <div className={`mob mob-${mob.size}`}>
        <img src={mob.src} alt={mob.name} />
      </div>
      <div className="speech-bubble hidden">
        <p>
          {table} x {by} = ?
        </p>
      </div>
    </div>
  );
};

export default QuestionDisplay;
