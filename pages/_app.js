'use-client'
import "../styles/globals.css"
import { Provider } from "react-redux";
import { getStore } from "../lib/store";

export default function App({ Component, pageProps }) {
  return (
  <Provider store={getStore()}>
    <Component {...pageProps} />;
  </Provider>
  )
}