import React, { FC, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "@components/Link";
import { Col, Row } from "antd";
import { useCountries } from "@common/hooks";
//import S from "./Header.module.scss";
//import C from "@assets/css/abstracts/constant.module.scss";

const Header: FC = () => {
  const router = useRouter();
  const { search } = router.query || "";

  const { searchValue, updateSearchValue } = useCountries();
  const onScroll = (showAll: boolean) => {
    const headerElement = document.getElementById("header")!;
    const logoLargeElement = document.getElementById("logo-large")!;
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30 ||
      showAll
    ) {
      /* headerElement.className = `${S.header} ${S.header_shadow}`;
      logoLargeElement.className = S.logo_img; */
    } else {
      /* headerElement.className = S.header;
      logoLargeElement.className = `${S.logo_img} ${C.filter_black}`; */
    }
  };

  useEffect(() => {
    if (!router.pathname.includes("country")) updateSearchValue("");
    else if (searchValue != search && !!search)
      updateSearchValue(search.toString());
    window.addEventListener("storage", (e) => {});

    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    if (!router.pathname.includes("country")) updateSearchValue("");
    else if (searchValue != search && !!search)
      updateSearchValue(search.toString());
  }, [router]);

  return (
    <>
      <header id="header" /* className={S.header} */>
        <Row
          /* className={S.header_row} */ justify="space-between"
          align="middle"
        >
          <Col
            xs={{ order: 1, span: 3 }}
            md={{ order: 1, span: 6 }}
            lg={8}
            onClick={() => {
              router.push("/");
            }}
          >
            <div /* className={S.logo_container} */>
              {/* <img
                id="logo-large"
                className={S.logo_img}
                src="/logo.png"
                alt="Logo"
              /> */}
            </div>
          </Col>
          <Col
            xs={{ order: 2, span: 3 }}
            md={{ order: 2, span: 8 }}
            lg={8}
            /* className={S.col_search_container} */
          >
            <div /* className={S.search_container} */>
              <input
                type="text"
                placeholder="Search your country"
                /* className={S.search_input} */
                value={searchValue}
                onChange={(e) => {
                  updateSearchValue(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key == "Enter" && searchValue.trim() !== "") {
                    router.push(`/country?search=${searchValue.trim()}`);
                  }
                }}
              />

              <div
                /* className={S.search_input_btn} */
                onClick={() => {
                  if (searchValue.trim() !== "") {
                    router.push(`?search=${searchValue.trim()}`);
                  }
                }}
              >
                <img
                  /* className={S.filter_white} */ src="/images/search.png"
                />
              </div>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
