import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../src/layouts/Layout";
import { store } from "../src/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
