import axios from "axios";

const url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/";
const decodedKey = import.meta.env.VITE_decoding_key;
const encodingKey = import.meta.env.VITE_encoding_key;

const getHoliday = async (year, month) => {
  // let encodingURL = encodeURIComponent(decodedKey);
  // encodingURL = encodingURL.replace(/\+/g, "%2B");
  // // encodingURL = encodingURL.replace(/\//g, "%2F");
  // // encodingURL = encodingURL.replace(/=/g, "%3D");

  console.log(encodingKey);

  const config = {
    ServiceKey: encodingKey,
    solYear: year,
    solMonth: month,
    _type: "json",
  };

  // const params = new URLSearchParams(config).toString();

  console.log(config);

  const res = await axios({
    method: "GET",
    url: `${url}getHoliDeInfo?`,
    params: config,
  });

  console.log(res);
};

export default getHoliday;
