import React, { FC, ReactNode, useEffect } from "react";
import Header from "@components/Header";
import { useRouter } from "next/router";
import { Layout as LayoutAntd } from "antd";
import { useMediaQuery } from "react-responsive";
import { WtspButton } from "@components/Button";
import CountryProvider from "@context/country";

const { Content } = LayoutAntd;
type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const paddingTop =
    router.pathname == "/" ? 0 : !isMobile ? "90.33px" : "60px";

  useEffect(() => {}, []);
  return (
    <LayoutAntd>
      <CountryProvider>
        <Header />
        <Content
          className="layout-content"
          style={{ background: "white", minHeight: "80vh", paddingTop }}
        >
          {children}
        </Content>
      </CountryProvider>
      <WtspButton></WtspButton>
    </LayoutAntd>
  );
};

export default Layout;
