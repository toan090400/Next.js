import Head from "next/head";
import LayoutMain from "../components/Layout/Main/Layout";
import AboutPage from "../components/About";
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <LayoutMain>
        <AboutPage />
      </LayoutMain>
    </>
  );
};

export default About;
