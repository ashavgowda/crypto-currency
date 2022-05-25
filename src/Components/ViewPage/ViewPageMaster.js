import React, { useState, useEffect } from "react";
import {
  fetchAllCryptoCurrency,
  getCryptoCurrencyById,
} from "../API/ViewPageApi";
import "../Assets/ViewPage.css";
import ViewRightMenu from "./ViewRightMenu";
import ViewleftMenu from "./ViewleftMenu";

export default function ViewPageMaster() {
  const [crytoCurrency, setCrytoCurrency] = useState([]);
  const [originalCryto, setoriginalCryto] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedCryptoCur, setselectedCryptoCur] = useState([]);
  const [seconds, setSeconds] = useState(5000);
  const [cryptoSearchKey, setCryptoSearchKey] = useState("");

  // useEffect(() => {
  //   // calling fetch crypto currency every 5 seconds
  //   if (seconds > 0) {
  //     getAllCryptoCurrency();
  //     setTimeout(() => setSeconds(seconds - 1), 5000);
  //   }
  // }, [seconds]);

  useEffect(() => {
    getAllCryptoCurrency();
  }, []);

  //get all currency data from get api
  const getAllCryptoCurrency = () => {
    fetchAllCryptoCurrency().then((res) => {
      if (res && res.data && res.data) {
        setCrytoCurrency(res.data);
        setoriginalCryto(res.data);
        setselectedCryptoCur(res.data && res.data[0]);
        setSelectedIdx(0);
      }
    });
  };

  //search currency based on input box value
  const onChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setCryptoSearchKey(e.target.value);
    } else {
      setCryptoSearchKey("");
      getAllCryptoCurrency();
    }
  };

  const seachCryptoHandler = (e) => {
    e.preventDefault();
    let filterArry = [];
    originalCryto &&
      originalCryto.map((item, idx) => {
        let data = item && item[0];
        if (data.includes(cryptoSearchKey)) {
          filterArry.push(item);
        }
        return true;
      });

    setCrytoCurrency(filterArry);
    setselectedCryptoCur(filterArry ? filterArry[0] : []);
    setSelectedIdx(0);
  };

  //on select of currency,show details of that crypto in right menu
  const selectCrypto = (e, idx, id) => {
    e.preventDefault();
    setSelectedIdx(idx);
    getCryptoCurrencyById(id).then((res) => {
      if (res && res.data && res.data[0]) {
        setselectedCryptoCur(res.data && res.data[0]);
      }
    });
  };

  return (
    <div className="table-grid">
      <ViewleftMenu
        onChangeHandler={onChangeHandler}
        crytoCurrency={crytoCurrency}
        selectedIdx={selectedIdx}
        selectCrypto={selectCrypto}
        seachCryptoHandler={seachCryptoHandler}
      />
      {selectedCryptoCur && selectedCryptoCur.length > 0 ? (
        <ViewRightMenu selectedCryptoCur={selectedCryptoCur} />
      ) : null}
    </div>
  );
}
