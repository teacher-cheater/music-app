import axios from "axios";
import { BASE_URL } from "../constants";
import { CategoryType, TrackType } from "@/sharedtypes/sharedTypes";

export const getTracks = (): Promise<TrackType[]> => {
  return axios(`${BASE_URL}/catalog/track/all/`).then(res => res.data.data);
};

export const getAllCategories = (): Promise<TrackType[]> => {
  return axios(`${BASE_URL}/catalog/selection/all`).then(res => res.data.data);
};

export const getCategories = (id: string): Promise<CategoryType[]> => {
  return axios(`${BASE_URL}/catalog/selection/${id}`).then(
    res => res.data.data
  );
};
