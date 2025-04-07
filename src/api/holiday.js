import axios from "axios";
import qs from "qs";

const url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/";
const encodingKey = import.meta.env.VITE_encoding_key;

let holidaysCache = {};

const getHoliday = async (year, month) => {
  const cacheKey = `${year}-${month}`;

  if (holidaysCache[cacheKey]) {
    // console.log("캐시에서 데이터 반환:", holidaysCache[cacheKey]);
    return holidaysCache[cacheKey];
  }

  const config = {
    solYear: year,
    solMonth: String(month).padStart(2, "0"),
    _type: "json",
  };

  const fullURL = `/getHoliDeInfo?ServiceKey=${encodingKey}`;

  const instance = axios.create({
    baseURL: `${url}`,
    paramsSerializer: (params) => {
      return qs.stringify(params, { encode: false });
    },
  });

  const res = await instance.get(fullURL, {
    params: config,
  });

  const {
    response: {
      body: { items },
      header: { resultCode },
    },
  } = res.data;

  try {
    if (!items) {
      return;
    } else {
      if (resultCode === "00") {
        // holidaysCache[cacheKey] = items;
        return items;
      } else if (resultCode === "30") {
        console.log("인증키 오류");
      }
    }
  } catch (error) {
    console.error(error);
  }

  return []; // 오류 발생 시 빈 배열 반환
};

const clearCache = () => {
  holidaysCache = {};
};

export { getHoliday, clearCache };
