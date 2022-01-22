import { FunctionComponent } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div id="root" className="min-h-screen">
      <Head>
        <title>Sangeet Khatri</title>
        <meta name="description" content="Freelance Frontend Engineer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div id="body-root" className="h-full min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col h-full flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
