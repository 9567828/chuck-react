import axios from "axios";
import qs from "qs";

const url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/";
const decodedKey = import.meta.env.VITE_decoding_key;
const encodingKey = import.meta.env.VITE_encoding_key;

const getHoliday = async (year, month) => {
  // let encodingURL = encodeURIComponent(decodedKey);

  const config = {
    solYear: year,
    solMonth: month,
    _type: "json",
  };

  const params = new URLSearchParams(config).toString();

  const fullURL = `${url}getHoliDeInfo?${params}&ServiceKey=${encodingKey}`;

  const res = await fetch(fullURL, {
    method: "GET",
  });

  console.log(res);

  // const instance = axios.create({
  //   baseURL: `${url}`,
  //   paramsSerializer: (params) => {
  //     return qs.stringify(params, { encode: false });
  //   },
  // });

  // const fullURL = `/getHoliDeInfo?ServiceKey=${encodingURL}`;

  // await instance.get(fullURL, {
  //   params: config,
  // });

  // const res = await axios({
  //   method: "GET",
  //   url: `${url}getHoliDeInfo?ServiceKey=${encodingURL}`,
  //   params: config,
  // });
};

export default getHoliday;
