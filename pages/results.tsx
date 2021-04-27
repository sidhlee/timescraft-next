export default function Results() {
  const diedScreen = <div className="overlay-warning"></div>;
  return (
    <aside id="results" className="overlay page results backdrop hidden">
      <div className="overlay-content">
        <div className="results--score">
          <header>
            <img
              className="clear-img"
              src="./assets/images/logo-clear.png"
              alt="Clear!"
            />
            <img
              className="levelup-img hidden"
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
                    <span>48</span>Seconds
                  </td>
                </tr>
                <tr className="results--score__correct">
                  <td>Correct</td>
                  <td>
                    <span>7</span>
                  </td>
                </tr>
                <tr className="results--score__missed mute">
                  <td>Missed</td>
                  <td>
                    <span>2</span>
                  </td>
                </tr>
                <tr className="results--score__accuracy">
                  <td>Accuracy</td>
                  <td>
                    <span>78</span>%
                  </td>
                </tr>
                <tr className="results--score__difficulty mute">
                  <td>Difficulty</td>
                  <td>
                    <span>83</span>
                  </td>
                </tr>
                <tr className="results--score__total">
                  <td>Total</td>
                  <td>
                    <span>+1400</span>
                  </td>
                </tr>
                <tr className="results--score__next-level">
                  <td>Next Level</td>
                  <td>
                    <span>1200</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>

        <div className="results--died hidden">
          <div className="message">
            <h2>You died!</h2>
            <p>
              Score: <span className="zero">0</span>
            </p>
          </div>
        </div>

        <div className="results__buttons">
          <button className="btn btn-again">Try Again!</button>
          <button className="btn btn-main">Main</button>
        </div>
      </div>
    </aside>
  );
}
