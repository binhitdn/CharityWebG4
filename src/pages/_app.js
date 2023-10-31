import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import "../i18n/i18n";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
