import { ICountry } from "@common/entities/country.entity";
import { Card, Col, Divider, Row } from "antd";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "@components/Link";
import { useMediaQuery } from "react-responsive";

const { Meta } = Card;

type PropTypes = {
  country: ICountry;
};

const CountryCard: FC<PropTypes> = ({ country }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  const MetaDescription = () => {
    return (
      <div className="meta-details">
        <p onClick={onClickDetailItem}>{country.region}</p>
        <Divider />
        <Row>
          <Col className="col-price" span={14} onClick={onClickDetailItem}>
            Population: {country.population}
          </Col>
        </Row>
      </div>
    );
  };

  const onClickDetailItem = () => {
    router.push(`/country/${country.alpha3Code}`);
  };

  return (
    <Card
      hoverable
      style={{ width: isMobile ? 150 : 220, margin: "auto" }}
      bodyStyle={{ padding: 10 }}
      cover={
        <Link href={`/country/${country.alpha3Code}`}>
          <Image
            height={isMobile ? 150 : 230}
            width={isMobile ? 150 : 220}
            objectFit="contain"
            onClick={onClickDetailItem}
            alt={country.name}
            src={country.flag}
          />
        </Link>
      }
    >
      <Meta
        className="meta-country-card"
        title={
          <div onClick={onClickDetailItem}>{country.name.toUpperCase()}</div>
        }
        description={<MetaDescription />}
      />
    </Card>
  );
};

export default CountryCard;
