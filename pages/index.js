import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Container from "../components/Container";
import FeaturedPackages from "../components/FeaturedPackages";
import { server } from "../config";

const Home = ({ services, packages }) => {
  return (
    <div>
      <Head>
        <title>
          Sell Your Listings :: We help you sell your listings faster
        </title>
        <meta
          name="og:title"
          content="Sell Your Listings :: We help you sell your listings faster"
        />
      </Head>
      <Layout>
        <Header />
        <FeaturedPackages
          services={services}
          leftPackage={packages.find((p) => p.id === 5)}
          mainPackage={packages.find((p) => p.id === 1)}
          rightPackage={packages.find((p) => p.id === 3)}
        />
        <Container>
          <p className="text-sm text-gray-500 mb-8 text-right">
            <span className="text-brand">*</span>The 3 first months of storage
            is included in the price of virtual tours.
          </p>
        </Container>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const servicesRes = await fetch(`${server}/api/services`);
  const packagesRes = await fetch(`${server}/api/packages`);
  const services = await servicesRes.json();
  const packages = await packagesRes.json();

  return {
    props: {
      services,
      packages,
    },
  };
}

export default Home;
