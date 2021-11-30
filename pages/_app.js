import { wrapper } from "../store/store";
import "tailwindcss/tailwind.css";
import "../styles.css";
import { Provider, session } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={(pageProps, session)}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
