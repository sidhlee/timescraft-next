import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goTo, Screen, appSlice } from '../../app/appSlice';
import { gameplaySlice } from '../gameplay/gameplaySlice';

export default function StartScreen() {
  const score = useAppSelector((state) => state.gameplay.score);
  const level = useAppSelector((state) => state.gameplay.level);

  const dispatch = useAppDispatch();

  const selectTable = (tableOrShuffle: number | 'shuffle') => {
    dispatch(gameplaySlice.actions.selectTable(tableOrShuffle));
  };

  const selectButtons = [...Array(8)].map((_, i) => {
    const table = i + 2;
    return (
      <button
        key={i}
        className={`btn select-${table}`}
        onClick={() => {
          selectTable(table);
          dispatch(appSlice.actions.goTo('play'));
        }}
      >
        {table}
      </button>
    );
  });

  const handleShuffleButtonClick = () => {
    selectTable('shuffle');
    dispatch(appSlice.actions.goTo('play'));
  };

  return (
    <section className="sc-start page">
      <div className="title">
        <div className="title__main">
          <img src="./assets/images/logo-timescraft.png" alt="TimesCraft" />
        </div>
        <div className="title__sub">
          <img src="./assets/images/logo-for-ethan.png" alt="For Ethan" />
        </div>
      </div>
      <table className="dashboard">
        <tbody>
          <tr className="dashboard__score">
            <td>Score</td>
            <td>{score}</td>
          </tr>
          <tr className="dashboard__level">
            <td>Level</td>
            <td>{level}</td>
          </tr>
        </tbody>
      </table>
      <div className="table-select">
        {selectButtons}
        <button
          className="btn select-shuffle"
          onClick={handleShuffleButtonClick}
        >
          Shuffle!
        </button>
      </div>
    </section>
  );
}
