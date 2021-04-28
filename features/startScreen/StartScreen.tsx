export default function StartScreen() {
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
        <button className="btn select-2" data-table="2">
          2
        </button>
        <button className="btn select-3" data-table="3">
          3
        </button>
        <button className="btn select-4" data-table="4">
          4
        </button>
        <button className="btn select-5" data-table="5">
          5
        </button>

        <button className="btn select-6" data-table="6">
          6
        </button>
        <button className="btn select-7" data-table="7">
          7
        </button>
        <button className="btn select-8" data-table="8">
          8
        </button>
        <button className="btn select-9" data-table="9">
          9
        </button>

        <button className="btn select-shuffle" data-table="shuffle">
          Shuffle!
        </button>
      </div>
    </section>
  );
}
