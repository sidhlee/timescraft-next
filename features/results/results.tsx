import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetPlay, selectTable } from '../gameplay/gameplaySlice';
import { goTo } from '../../app/appSlice';
import GameOver from './GameOver';
import Score from './Score';

export default function Results() {
  const life = useAppSelector((state) => state.gameplay.life);
  const selectedTable = useAppSelector((state) => state.gameplay.selectedTable);
  const dispatch = useAppDispatch();
  const died = life === 0;

  const result = died ? <GameOver /> : <Score />;

  function handleAgainButtonClick() {
    dispatch(resetPlay());
    dispatch(selectTable(selectedTable));
    dispatch(goTo('play'));
  }

  function handleMainButtonClick() {
    dispatch(resetPlay());
    dispatch(goTo('start'));
  }

  return (
    <>
      <aside
        id="results"
        className={`overlay page results backdrop${died ? ' danger' : ''}`}
      >
        <div className={'overlay-content'}>
          {result}
          <div className="results__buttons">
            <button className="btn btn-again" onClick={handleAgainButtonClick}>
              Try Again!
            </button>
            <button className="btn btn-main" onClick={handleMainButtonClick}>
              Main
            </button>
          </div>
        </div>
      </aside>
      {died && <div className="overlay-warning"></div>}
    </>
  );
}
