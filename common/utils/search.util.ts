import { ICountry } from "@common/entities";

export function getContinents(countries: ICountry[]) {
  return countries.reduce((xArr, x) => xArr.add(x.region), new Set());
}
