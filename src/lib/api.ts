import axios from "axios";
import { EquipmentType } from "./types";

const api = axios.create({
  baseURL: "https://back.avto-kran.uz/api",
});

export const getequipmentTypes = async (): Promise<EquipmentType[]> => {
  const res = await api.get("/equipment-categories");
  return res.data;
};

export const getProductsByCategory = async (category_name: string) => {
  const res = await api.get(`/autolifts/by-category/${category_name}`);
  return res.data;
};
