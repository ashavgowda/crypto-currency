import React from "react";

export default function ViewPageDetails({ selectedCryptoCur }) {
  return (
    <div className="right-menu">
      <h2>{selectedCryptoCur && selectedCryptoCur[0]}</h2>
      <div>
        <span className="value-data">
          $ {selectedCryptoCur && selectedCryptoCur[1].toFixed(2)}
        </span>{" "}
        <span className="percentage-data">
          {selectedCryptoCur && selectedCryptoCur[3]}%
        </span>
      </div>
      <hr></hr>
      <div className="volume-data">
        <div className="volume-data-div">
          <p className="high-name">HIGH</p>
          <p className="high-value">
            {" "}
            $ {selectedCryptoCur && selectedCryptoCur[1].toFixed(2)}
          </p>
        </div>
        <div className="volume-data-div">
          <p className="high-name">LOW</p>
          <p className="high-value">
            {" "}
            $ {selectedCryptoCur && selectedCryptoCur[4].toFixed(2)}
          </p>
        </div>
        <div className="volume-data-div">
          <p className="high-name">VOLUME</p>
          <p className="high-value">
            {" "}
            {selectedCryptoCur && selectedCryptoCur[2].toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
