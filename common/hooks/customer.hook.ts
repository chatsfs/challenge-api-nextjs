import { useContext } from "react";
import { CountryContext } from "@context/country";

export const useCountries = () => {
  const { countries, searchValue, updateCountry, updateSearchValue } =
    useContext(CountryContext);

  return { countries, searchValue, updateCountry, updateSearchValue };
};
