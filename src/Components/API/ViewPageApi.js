import { jsonAxios } from "./json-fetch";

//api for getting all cryto currency//
export const fetchAllCryptoCurrency = async () => {
  try {
    const url = `/v2/tickers?symbols=ALL`;
    const response = await jsonAxios({
      url: url,
      method: "get",
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//api for getting all cryto currency by crypto symbol//
export const getCryptoCurrencyById = async (id) => {
  try {
    const url = `v2/tickers?symbols=${id}`;
    const response = await jsonAxios({
      url: url,
      method: "get",
    });
    return response;
  } catch (err) {
    throw err;
  }
};
