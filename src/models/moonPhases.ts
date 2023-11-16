type langTypes =
  | "pt"
  | "en"
  | "es"
  | "fr"
  | "zh"
  | "ru"
  | "ca"
  | "it"
  | "de"
  | "pl";

export interface MoonPhaseApiConfig {
  lang: langTypes;
  month: number;
  year: number;
  size: 100;
  lightColor: string;
  shadeColor: string;
  texturize: boolean;
}

export interface MoonPhaseResponse {
  monthName: string;
  firstDayMonth: string;
  daysMonth: string;
  nameDay: string[];
  nameMonth: string;
  phase: { [key: string]: Phase };
  month: number;
  year: number;
  receivedVariables: ReceivedVariables;
  lang: string;
  language: string;
  title: string[];
  nextFullMoon: string;
  autor: string;
  version: string;
}

export interface Phase {
  phaseName: string;
  isPhaseLimit: boolean | number;
  lighting: number;
  svg: string;
  svgMini: string;
  timeEvent: boolean | string;
  dis: number;
  dayWeek: number;
  npWidget: string;
}

export interface ReceivedVariables {
  lang: string;
  month: string;
  year: string;
  size: string;
  lightColor: string;
  shadeColor: string;
  texturize: string;
  LDZ: string;
}
