function GameOver() {
  return (
    <>
      <div className="overlay-warning"></div>
      <div className="results--died">
        <div className="message">
          <h2>You died!</h2>
          <p>
            Score: <span className="zero">0</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default GameOver;
