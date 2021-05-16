import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Page from "../components/Page";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <head>
          <meta charset="UTF-8" />
          <title>SABKA BAZAAR</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap"
            rel="stylesheet"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700;800&display=swap" rel="stylesheet"></link>
        </head>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Provider>
    </>
  );
};

export default MyApp;
