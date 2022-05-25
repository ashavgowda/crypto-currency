import React from "react";
import "../Assets/ViewPage.css";

export default function ViewleftMenu({
  onChangeHandler,
  seachCryptoHandler,
  crytoCurrency,
  selectedIdx,
  selectCrypto,
}) {
  return (
    <div className="left-search-box">
      <form className="input-search-form">
        <input
          className="input-search"
          type="search"
          placeholder="Search"
          onChange={onChangeHandler}
        />
        <button className="search-icon" onClick={seachCryptoHandler}>
          Search
        </button>
      </form>
      {crytoCurrency &&
        crytoCurrency.map((item, index) => (
          <div
            key={index}
            className={
              selectedIdx === index ? "table-data active-row" : "table-data"
            }
            onClick={(e) => {
              selectCrypto(e, index, item && item[0]);
            }}
          >
            <div className="data-1">{item && item[0]}</div>
            <div className="data-2">$ {item && item[1].toFixed(2)}</div>
            <div className="data-3">Vol :{item && item[2].toFixed(2)} </div>
            <div className="data-4">{item && item[3]} %</div>
          </div>
        ))}
    </div>
  );
}
