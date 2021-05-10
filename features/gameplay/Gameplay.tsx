import HeadsUpDisplay from './HeadsUpDisplay';

const Gameplay: React.FC = () => {
  return (
    <section className="sc-play page">
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
      <HeadsUpDisplay />
      <div className="answer-buttons">
        <button className="btn">11</button>
        <button className="btn">22</button>
        <button className="btn">33</button>
        <button className="btn">44</button>
      </div>
    </section>
  );
};

export default Gameplay;
