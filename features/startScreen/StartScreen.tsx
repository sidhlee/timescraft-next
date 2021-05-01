import { useSelector, useDispatch } from 'react-redux';

export default function StartScreen() {
  const selectButtons = [...Array(8)].map((_, i) => {
    const table = i + 2;
    return (
      <button key={i} className={`btn select-${table}`}>
        {table}
      </button>
    );
  });

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
            <td></td>
          </tr>
          <tr className="dashboard__level">
            <td>Level</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="table-select">
        {selectButtons}
        <button className="btn select-shuffle" data-table="shuffle">
          Shuffle!
        </button>
      </div>
    </section>
  );
}
