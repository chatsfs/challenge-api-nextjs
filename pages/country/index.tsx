import { countriesData } from "@assets/data";
import { ICountry } from "@common/entities";
import { useCountries } from "@common/hooks";
import { CountryCard } from "@components/HeroCard";
import Spacer from "@components/Spacer";
import { Col, Row, Spin } from "antd";
import { count } from "console";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

const CountryList: FC = () => {
  const router = useRouter();
  const { search } = router.query;

  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const { countries } = useCountries();

  const getItemsBySearch = () => {
    setCountryList(
      countries.filter((x) => {
        if (!!search)
          return x.name
            .toLowerCase()
            .includes((search as string).toLowerCase());
        else return [];
      })
    );
  };

  useEffect(() => {
    getItemsBySearch();
  }, [router]);

  const renderCountryCards = () => {
    return (
      <Row
        className="row-items"
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 8 }, 32]}
      >
        {countryList.length > 0 ? (
          countryList.map((x, index) => (
            <Col
              key={index}
              className="gutter-row"
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
            >
              <CountryCard country={x}></CountryCard>
            </Col>
          ))
        ) : (
          <h3 style={{ margin: "auto" }}>
            Ups... There is no countries with this search
          </h3>
        )}
      </Row>
    );
  };

  return (
    <>
      <div className="category-list-container">
        <div id="service-container">
          <Spacer n={2}></Spacer>
          {renderCountryCards()}
          <Spacer n={3}></Spacer>
        </div>
      </div>
    </>
  );
};
export default CountryList;
