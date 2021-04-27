export default function Gameplay() {
  return (
    <section className="sc-play page hidden">
      <header className="header">
        <div className="logo">
          <img src="./assets/images/logo-timescraft.png" alt="TimesCraft" />
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
  );
}
