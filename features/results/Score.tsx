import { useResults } from './useResults';

function Score() {
  const {
    clearTime,
    correct,
    missed,
    accuracy,
    difficulty,
    total,
    nextLevel,
    levelAfterClear,
    levelUpBy,
    isUp,
  } = useResults();

  return (
    <div className="results--score">
      <header>
        <img
          className="clear-img"
          src="../../public/assets/images/logo-clear.png"
          alt="Clear!"
        />
        <img
          className="levelup-img hidden"
          src="../../public/assets/images/logo-level-up.png"
          alt="Level Up!"
        />
      </header>
      <main className="table-wrapper">
        <table className="score">
          <thead className="sr-only">
            <tr>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="results--score__time mute">
              <td>Clear Time</td>
              <td>
                <span>{clearTime}</span>Seconds
              </td>
            </tr>
            <tr className="results--score__correct">
              <td>Correct</td>
              <td>
                <span>{correct}</span>
              </td>
            </tr>
            <tr className="results--score__missed mute">
              <td>Missed</td>
              <td>
                <span>{missed}</span>
              </td>
            </tr>
            <tr className="results--score__accuracy">
              <td>Accuracy</td>
              <td>
                <span>{accuracy}</span>%
              </td>
            </tr>
            <tr className="results--score__difficulty mute">
              <td>Difficulty</td>
              <td>
                <span>{difficulty}</span>
              </td>
            </tr>
            <tr className="results--score__total">
              <td>Total</td>
              <td>
                <span>+{total}</span>
              </td>
            </tr>
            <tr className="results--score__next-level">
              <td>Next Level</td>
              <td>
                <span>{nextLevel}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Score;
