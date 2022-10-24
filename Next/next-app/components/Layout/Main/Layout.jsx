import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
