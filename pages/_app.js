import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);
  return <>{pageLoaded ? <Component {...pageProps} /> : null}</>;
}

export default MyApp;
