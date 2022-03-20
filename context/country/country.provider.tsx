import { ICountry } from "@common/entities";
import React, { useState, FC, Dispatch, SetStateAction } from "react";

interface ICountryContext {
  countries: ICountry[];
  searchValue: string;
  updateCountry: (countries: ICountry[]) => void;
  updateSearchValue: (searchValue: string) => void;
}

export const CountryContext = React.createContext<ICountryContext>(
  {} as ICountryContext
);

const CountryProvider: FC = ({ children }) => {
  const [countries, setCountries] = useState([] as ICountry[]);
  const [searchValue, setSearchValue] = useState("");
  const updateCountry = (countries: ICountry[]) => {
    setCountries(countries);
  };
  const updateSearchValue = (searchValue: string) => {
    setSearchValue(searchValue);
  };
  return (
    <CountryContext.Provider
      value={{ countries, searchValue, updateCountry, updateSearchValue }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
