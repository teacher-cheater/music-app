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
  console.log(data);
  return axios.post(`${BASE_URL}/user/login`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
};
