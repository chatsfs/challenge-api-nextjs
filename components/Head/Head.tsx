import { FC } from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '@config/seo.json';

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Hygge Nails" />
        <meta
          name="keywords"
          content="Hygge, Nails, Hygge Nails, Belleza a domicilio, Belleza, Salud, Relajación, Servicios, A domicilio, domicilio, Masajes, Uñas, Pies, Manicure, Manos, Podología, Pedicure, Depilaciones, MakeUp, Maquillaje"
        />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  );
};

export default Head;
