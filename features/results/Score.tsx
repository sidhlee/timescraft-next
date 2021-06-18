import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { updateLevelAndScore } from '../gameplay/gameplaySlice';
import { animated, useTransition } from 'react-spring';
import { useResults } from './useResults';
import { useEffect, useState } from 'react';

const StyledScore = styled.div`
  // height: 100%;

  header {
    position: relative;
    height: 4rem;
    .clear-img,
    .levelup-img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .levelup-img {
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
    newLevel,
    newScore,
    isUp,
  } = useResults();

  const dispatch = useAppDispatch();

  const [levelUpDisplayed, setLevelUpDisplayed] = useState(false);
  useEffect(() => {
    dispatch(updateLevelAndScore({ newLevel, newScore }));

    if (isUp) {
      window?.setTimeout(() => {
        setLevelUpDisplayed(true);
      }, 1000);
    }
  }, []);

  const transitions = useTransition(levelUpDisplayed, {
    initial: {
      opacity: 1,
      transform: `translate3d(0, 0, 0)`,
    },
    from: {
      opacity: 0,
      transform: `translate3d(-1000px, 0, 0)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0, 0px, 0)`,
      config: {
        mass: 2,
        tension: 200,
        friction: 22,
      },
    },
    leave: {
      opacity: 0,
      transform: `translate3d(0, -100%, 0)`,
      config: {
        mass: 1,
        tension: 75,
        friction: 20,
      },
    },
  });

  return (
    <StyledScore className="results--score">
      <header>
        {transitions((styles, levelUp) => (
          <animated.img
            className={levelUp ? 'levelup-img' : 'clear-img'}
            src={
              levelUp
                ? './assets/images/logo-level-up.png'
                : './assets/images/logo-clear.png'
            }
            alt={levelUp ? 'Level Up!' : 'Clear!'}
            style={styles}
          />
        ))}
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
