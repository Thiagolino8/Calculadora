import { NextPage } from "next";
import Head from "next/head";
import Calculator from "../modules/calculator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculadora</title>
        <meta charSet="utf-8" />
      </Head>
      <Calculator />
    </>
  );
};

export default Home;
