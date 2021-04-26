import Head from 'next/head';
import SEO from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Head>
        <SEO />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&family=VT323&display=swap"
          rel="stylesheet"
        />
        {/*  CSS  */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <div className="app">
        <main id="main" className="app-container">
          <section className="sc-start page">
            <div className="title">
              <div className="title__main">
                <img
                  src="./assets/images/logo-timescraft.png"
                  alt="TimesCraft"
                />
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

          <section className="sc-play page hidden">
            <header className="header">
              <div className="logo">
                <img
                  src="./assets/images/logo-timescraft.png"
                  alt="TimesCraft"
                />
              </div>
            </header>

            <div className="question">
              <div className="mob mob-md">
                <img src="./assets/images/mobs/creeper.png" alt="mob" />
              </div>
              <div className="speech-bubble hidden">
                <p>4 x 4 = ?</p>
              </div>
            </div>

            <div className="hud">
              <div className="row"></div>
              <div className="hud__life row">
                <div className="col heart">
                  <img src="./assets/images/heart.png" alt="health" />
                </div>
                <div className="col heart">
                  <img src="./assets/images/heart.png" alt="health" />
                </div>
                <div className="col heart">
                  <img src="./assets/images/heart.png" alt="health" />
                </div>
                <div className="col heart">
                  <img src="./assets/images/heart.png" alt="health" />
                </div>
                <div className="col heart">
                  <img src="./assets/images/heart.png" alt="health" />
                </div>
              </div>
              <div className="hud__time">
                <div className="hourglass">
                  <img src="./assets/images/hourglass.png" alt="hourglass" />
                </div>
                <span>9</span>
              </div>
              <div className="hud__progress row">
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
                <div className="exp col">
                  <img src="./assets/images/exp-empty.png" alt="progress" />
                </div>
              </div>
            </div>

            <div className="answer-buttons">
              <button className="btn">11</button>
              <button className="btn">22</button>
              <button className="btn">33</button>
              <button className="btn">44</button>
            </div>
          </section>
        </main>

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

        <div className="overlay-warning"></div>
      </div>
    </>
  );
}
