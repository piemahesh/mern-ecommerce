import { API } from "../../../../services";

export const RegisterAPI = async (data) => {
  const { username, email, password } = data || {};
  if (!username || !email || !password) {
    alert("please provide all the keys username,password,email");
  }
  try {
    const response = await API.post("/auth/register", { ...data });
    return response;
  } catch (error) {
    return error;
  }
};

export const LoginAPI = async (data) => {
  const { username, password } = data || {};
  if (!username || !password) {
    alert("please provide all the keys password,username");
  }
  try {
    const response = await API.post("/auth/login", { ...data });
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
