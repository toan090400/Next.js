import "../styles/globals.css";
import Layout from "../context/layout";
import { AuthContextProvider } from "../context/auth";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
