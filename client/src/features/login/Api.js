import request from "../../shared/utils/request";

const doLogin = async (params) => {
  const { data } = await request.post("login", params);

  return data;
};

export { doLogin };
