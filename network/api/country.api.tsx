import { apiUrls } from "../../common/constants";
import { apiHelper } from "../../common/utils";

const { ITEM_URL } = apiUrls;

export function getAllCountries() {
  return apiHelper.execute("get", `${ITEM_URL}/all`);
}

export function getAllCountriesByContinent(search: string) {
  return apiHelper.execute("get", `${ITEM_URL}/continent/${search}/`);
}

export function getCountryByName(slug: string) {
  console.log(`${ITEM_URL}/alpha/${slug}/`);
  return apiHelper.execute("get", `${ITEM_URL}/alpha/${slug}/`);
}
