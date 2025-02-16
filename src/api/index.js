import axios from "axios";

const SERVER_URL = "https://localhost:28444";

const request = async (method, url, data) => {
  const res = await axios({
    method,
    url: `${SERVER_URL}${url}`,
    data,
  });
  console.log(res);
};

export default request;
