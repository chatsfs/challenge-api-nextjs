import { ICountry, IRegion } from "@common/entities";
import { getAllCountries, getAllCountriesByContinent } from "network/api";
import React, { FC, useEffect, useMemo, useState } from "react";
import { CountryCard } from "@components/HeroCard";
import { RegionListCarousel } from "@components/Carousel";
import Spacer from "@components/Spacer";
import { Col, Row, Spin, Tabs } from "antd";
import "keen-slider/keen-slider.min.css";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { countriesData } from "@assets/data";
import { useCountries } from "@common/hooks";

type PropTypes = {
  countries: ICountry[];
  regions: IRegion[];
};

const Home: FC<PropTypes> = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { name } = router.query;

  const { countries, updateCountry } = useCountries();
  const [errorItems, setError] = useState<string>();

  const getItemsByCategory = async () => {
    setLoading(true);
    setError(undefined);
    updateCountry([]);

    try {
      const countriesRes = await getAllCountries();
      let countriesDataSerialize: ICountry[] = countriesRes.map((x: any) => {
        return {
          name: x.name,
          alpha3Code: x.alpha3Code,
          subregion: x.subregion,
          capital: x.capital,
          flag: x.flag,
          region: x.region,
          population: x.population,
        };
      });
      console.log(countriesDataSerialize.length);
      updateCountry(countriesDataSerialize);
      //countriesData.map(x => ({x.name,x.capital, x.moneda, x.flag,x.region, x.languages, x.currencies,x.population})
    } catch {
      setError("Ups... Ocurrió un error inesperado.");
    }
    setLoading(false);
  };
  const regions = useMemo(
    () =>
      Array.from(
        countries.reduce((nSet, x) => nSet.add(x.region), new Set<string>())
      ),
    [countries]
  );

  useEffect(() => {
    getItemsByCategory();
  }, [router]);

  const renderCountryCards = () => {
    return (
      <Row
        className="row-items"
        gutter={[{ xs: 8, sm: 16, md: 12, lg: 8 }, 24]}
      >
        {isLoading ? (
          <Spin
            className="spin-items"
            size="large"
            spinning={true}
            tip="Cargando..."
          ></Spin>
        ) : errorItems ? (
          <h3 style={{ margin: "auto" }}>{errorItems}</h3>
        ) : countries.length > 0 ? (
          countries.map((x, index) => (
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
              <CountryCard country={x} />
            </Col>
          ))
        ) : (
          <h3 style={{ margin: "auto" }}>
            Ups... No hay servicios en esta categoría
          </h3>
        )}
      </Row>
    );
  };

  const hasCountries = regions && regions.length > 0;
  const selectedCategory = hasCountries
    ? regions.find((x) => x === name)
    : undefined;

  return (
    <>
      {!!selectedCategory && (
        <NextSeo
          title={`${selectedCategory} - Country Houm App`}
          openGraph={{
            type: "website",
            url: `https://hyggenails.com/region/${selectedCategory}`,
            title: selectedCategory,
          }}
        ></NextSeo>
      )}
      <div className="category-list-container">
        {router.isFallback ? (
          <Spin
            className="spin-items"
            size="large"
            spinning={true}
            tip="Cargando..."
          ></Spin>
        ) : (
          <>
            <div id="service-container" style={{ paddingTop: "30px" }}>
              <RegionListCarousel regions={regions} />
              <Spacer n={1}></Spacer>
              {renderCountryCards()}
              <Spacer n={3}></Spacer>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
