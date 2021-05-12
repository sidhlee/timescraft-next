import { useAppSelector } from '../../app/hooks';
import { Question } from './gameplaySlice';

type HeadsUpDisplayProps = {
  life: number;
  currentQuestionIndex: number;
};

const HeadsUpDisplay: React.FC<HeadsUpDisplayProps> = ({
  life,
  currentQuestionIndex,
}) => {
  const remainingTime = useAppSelector((state) => state.gameplay.remainingTime);

  // Fill 0 for not finished, 1 for finished questions
  const progressArray = [...Array(8)].map((_, i) =>
    i < currentQuestionIndex ? 1 : 0
  );

  const lives = [...Array(life)].map((_, i) => (
    <div key={i} className="col heart">
      <img src="./assets/images/heart.png" alt="health" />
    </div>
  ));

  const progressBars = progressArray.map((n, i) => {
    return n ? (
      <div key={i} className="exp col">
        <img src="./assets/images/exp-full.png" alt="progress" />
      </div>
    ) : (
      <div key={i} className="exp col">
        <img src="./assets/images/exp-empty.png" alt="empty progress" />
      </div>
    );
  });

  return (
    <div className="hud">
      <div className="row"></div>
      <div className="hud__life row">{lives}</div>
      <div className="hud__time">
        <div className="hourglass">
          <img src="./assets/images/hourglass.png" alt="hourglass" />
        </div>
        <span>{remainingTime}</span>
      </div>
      <div className="hud__progress row">{progressBars}</div>
    </div>
  );
};

export default HeadsUpDisplay;
