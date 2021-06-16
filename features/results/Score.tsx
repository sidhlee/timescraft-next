import styled from 'styled-components';
import { useResults } from './useResults';

const StyledScore = styled.div`
  // height: 100%;

  header {
    position: relative;
    .levelup-img {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(1.1);
    }
  }

  .table-wrapper {
    table {
      display: inline-block;
      tbody {
        display: inline-block;
        width: 100%;
        tr {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5em;
        }
      }
      width: 100%;
      height: 80%;
      max-height: 20em;
      td,
      span {
        font-size: var(--fz-sm);
      }
      td {
        padding: 0.5 0;
      }
      .results--score__total {
        td,
        span {
          font-size: var(--fz-lg);
        }
      }
      tr {
        td:last-child {
          text-align: right;
        }
      }
    }
  }
`;

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
    levelUpBy, // how many levels the player goes up by as the result of this game
    isUp,
  } = useResults();

  return (
    <StyledScore className="results--score">
      <header>
        <img
          className="clear-img"
          src="./assets/images/logo-clear.png"
          alt="Clear!"
        />
        <img
          className={isUp ? 'levelup-img' : 'levelup-img hidden'}
          src="./assets/images/logo-level-up.png"
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
    </StyledScore>
  );
}

export default Score;
