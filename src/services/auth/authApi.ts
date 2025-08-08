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

export const authUser = (data: authUserProps): Promise<authUserReturn> => {
  return axios.post(`${BASE_URL}/user/login`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
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
  return axios.post(`${BASE_URL}/user/signup`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
};
