import getEnvVars from "../apiUrl";
import axiosUtils from "../axios/axiosUtils";
import Result from "../models/RandomUser/Result";
const baseUrl = getEnvVars().apiUrl;

export function getRandomUser(): Promise<any> {
  return axiosUtils<Result>(`${baseUrl}/`, "GET");
}
