import axios from "axios";
import { BASE_URL } from "../constants";

interface authUserProps {
  email: string;
  password: string;
}

interface authUserReturn {
  email: string;
  password: string;
  _id: number;
}

interface accessTokenType {
  access: string;
}

interface refreshTokenType {
  refresh: string;
}

type tokensType = accessTokenType & refreshTokenType;

export const authUser = (data: authUserProps): Promise<authUserReturn> => {
  return axios.post(`${BASE_URL}/user/login`, data);
};

export const createUser = ({
  email,
  password,
}: authUserProps): Promise<authUserReturn> => {
  const data = {
    email,
    password,
    username: email,
  };
  return axios.post(`${BASE_URL}/user/signup`, data);
};

export const getTokens = (data: authUserProps): Promise<tokensType> => {
  return axios.post(`${BASE_URL}/user/token/`, data).then(res => res.data);
};

export const refreshToken = (refresh: string): Promise<accessTokenType> => {
  return axios
    .post(`${BASE_URL}/user/token/refresh`, { refresh })
    .then(res => res.data);
};
