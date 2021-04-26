import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Page from "../components/Page";

const MyApp=({ Component, pageProps })=> {
  return (
    <>
      <Provider store={store}>
        <title>SABKA BAZAAR</title>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Provider>
    </>
  );
}

export default MyApp;