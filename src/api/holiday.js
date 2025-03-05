import axios from "axios";

const url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo";
const apiKey = import.meta.env.VITE_decoding_key;
// const encodingKey = import.meta.env.VITE_encoding_key;

const getHoliday = async (year, month) => {
  const encodingURL = encodeURIComponent(apiKey);

  console.log(encodingURL);

  const config = {
    ServiceKey: encodingURL,
    solYear: year,
    solMonth: month,
    _type: "json",
  };

  console.log(config);

  const res = await axios({
    method: "GET",
    url: `${url}`,
    params: config,
  });

  console.log(res);
};

export default getHoliday;
