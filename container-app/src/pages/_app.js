import NavLayout from "@/components/layouts/navLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <NavLayout>
  <Component {...pageProps} />;

  </NavLayout>
}
