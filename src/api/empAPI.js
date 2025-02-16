import request from ".";

const prefix = "/emp";

export const getEmp = async () => {
  const res = await request("GET", `${prefix}`);
  return res;
};

export const addEmp = async (data) => {
  const res = await request("POST", `${prefix}`, data);
  return res;
};

export const loginEmp = async (empEmail) => {
  const res = await request("POST", `${prefix}/login`, empEmail);
  return res;
};

export const getValidCode = async (empEmail) => {
  const res = await request("POST", `${prefix}/valid`, empEmail);
  return res;
};
