export interface ICountry {
  name: string;
  alpha3Code: string;
  capital?: string;
  subregion: string;
  flag: string;
  region: string;
  population: number;
}

export interface IRegion {
  name: string;
}

export interface ILanguage {
  name: string;
}

export interface ICurrency {
  name: string;
}
