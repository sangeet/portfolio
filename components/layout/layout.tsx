import { FunctionComponent } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { metatags } from "../../data/metatags";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div id="root" className="min-h-screen">
      <Head>
        <title>Sangeet Khatri</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
        {metatags.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
      </Head>
      <div id="body-root" className="h-full min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col h-full grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
