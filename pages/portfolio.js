import Head from "next/head";
import { server } from "../config";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";
import Container from "../components/Container";
import Property from "../components/Property";

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <Head>
        <title>Portfolio :: Sell Your Listings</title>
        <meta property="og:title" value="Portfolio :: Sell Your Listings" />
      </Head>
      <Layout>
        <Navbar />
        <Container>
          <h1>Portfolio</h1>
          {portfolio.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const portfolioRes = await fetch(`${server}/api/portfolio`);
  const portfolio = await portfolioRes.json();

  return {
    props: {
      portfolio,
    },
  };
}

export default Portfolio;
