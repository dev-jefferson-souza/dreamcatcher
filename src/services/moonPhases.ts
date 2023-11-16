import axios, { AxiosResponse } from "axios";
import { MoonPhaseApiConfig, MoonPhaseResponse } from "../models/moonPhases";

const moonPhaseAPI = axios.create({
  baseURL: "https://www.icalendar37.net/lunar/api",
});

const getMoonPhase = (): Promise<AxiosResponse<MoonPhaseResponse>> => {
  const ldz = Date.now() / 1000;
  const date = new Date();

  const params: MoonPhaseApiConfig = {
    lang: "pt",
    year: date.getFullYear(),
    month: date.getMonth(),
    size: 100,
    texturize: false,
    lightColor: "#fff",
    shadeColor: "#1C1C3B",
  };

  const paramsRequest = { ...params, LDZ: ldz };
  return moonPhaseAPI.get("/", { params: paramsRequest });
};

const moonPhasesService = {
  getMoonPhase,
};

export default moonPhasesService;
