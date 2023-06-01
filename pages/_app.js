import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CURRENT_SEASON = 2022;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} CURRENT_SEASON={CURRENT_SEASON} />
      </SWRConfig>
    </>
  );
}
