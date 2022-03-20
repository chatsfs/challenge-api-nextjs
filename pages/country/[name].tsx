import { FieldTimeOutlined, BackwardOutlined } from "@ant-design/icons";
import { ICountry } from "@common/entities";
import { useCountries } from "@common/hooks";
import { Col, Row, Spin } from "antd";
import { getCountryByName } from "network/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import router, { useRouter } from "next/router";
import { FC } from "react";

const ItemDetail: FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const { countries } = useCountries();
  console.log(countries);
  const country =
    countries.filter((x) => x.alpha3Code == (name as string))[0] || undefined;
  console.log(country);
  if (!country)
    return (
      <div>
        <Spin></Spin>
      </div>
    );
  const onClickDetailItem = () => {
    router.push(`/`);
  };

  return (
    <>
      <NextSeo
        title={`${country.name} - Country App - Houm`}
        description={country.name}
        openGraph={{
          type: "website",
          url: `${country.name}`,
          title: country.name,
          description: country.name,
          images: [{ url: country.flag }],
        }}
      ></NextSeo>
      <div className="item-detail-container">
        <div id="item-container">
          <Row
            className="row-item-detail"
            justify="center"
            align="middle"
            gutter={[{ xs: 0, sm: 16, md: 24, lg: 32 }, 24]}
          >
            <Col span={20} className="col-item-detail">
              <Row
                justify="space-between"
                align="top"
                style={{ padding: "20px 10px" }}
                gutter={8}
              >
                <Col xs={24} sm={18} md={16} lg={11}></Col>
                <Col xs={0} lg={1}>
                  <div className="vr-item-detail"></div>
                </Col>
                <Col xs={24} lg={11}>
                  <h1
                    style={{
                      fontWeight: 600,
                      fontSize: "2rem",
                      marginBottom: 0,
                    }}
                  >
                    {country.name}
                  </h1>
                  <Row
                    justify="start"
                    style={{
                      marginBottom: "2rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    <Col
                      style={{ backgroundColor: "black", marginRight: "1rem" }}
                    >
                      <h3
                        style={{
                          color: "white",
                          margin: 0,
                          padding: "3px 16px",
                        }}
                      ></h3>
                    </Col>
                    <Col style={{ backgroundColor: "black" }}>
                      <h3
                        style={{
                          color: "white",
                          margin: 0,
                          padding: "3px 16px",
                        }}
                      >
                        <FieldTimeOutlined />{" "}
                      </h3>
                    </Col>
                  </Row>

                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "0.85em",
                      whiteSpace: "pre-wrap",
                    }}
                  ></p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: "3rem",
                    }}
                  >
                    <button
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        padding: "8px 15px",
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                      }}
                      onClick={onClickDetailItem}
                    >
                      <BackwardOutlined style={{ marginRight: "1rem" }} />
                      Atras
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
