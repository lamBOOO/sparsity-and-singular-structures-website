// import '../styles/globals.css'

import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
      src="holder.js"
    />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
