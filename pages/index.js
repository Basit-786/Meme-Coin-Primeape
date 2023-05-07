import Head from "next/head";

import { Navbar, Hero, Elon, Contact, About, Tokenomics } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRMAPE</title>
        <meta
          name="description"
          content="A cryptocurrency web app to secure to crypto wallet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-[url(/bg.jpg)] bg-cover bg-no-repeat bg-center overflow-x-hidden ">
        <div className="mx-4">
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
        </div>
      </div>
    <div className="bg-[url(/bgWhite.png)] bg-repeat bg-cover overflow-x-hidden bg-[#E7FDEC] ">

      <div className="mx-4">

        <section id="about">
          <About />
        </section>
        <section id="elon">
          <Elon />
        </section>

        <section id="tokenomics">
          <Tokenomics />
        </section>

        <section id="contact">
          <Contact />
        </section>
        </div>

      </div>
    </>
  );
}
