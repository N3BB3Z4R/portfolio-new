import type { NextPage } from "next";
import Head from "next/head"
import Header from "src/components/Header/Header";
import WelcomeBlock from "src/components/WelcomeBlock/WelcomeBlock";
import SocialsBlock from "src/components/SocialsBlock/SocialsBlock";
import About from "src/components/About/About";
import Footer from "src/components/Footer/Footer";
import Contact from "src/components/Contact/Contact";
import Gallery from "src/components/Gallery/Gallery";
import NextSectionButton from "src/components/NextSectionButton/NextSectionButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar Abad - Portfolio</title>
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png"></link>
        <script async src="goUp.js" />
      </Head>
      <div className="flex flex-col gap-4 w-[90vw] lg:w-[70vw] xl:w-[60vw] mx-auto">
        <span className="stars z-1" />
        <span className="stars2 z-1" />
        <span className="stars3 z-1" />
        <Header />
        <div className="z-10 h-[100vh] flex flex-col gap-4 justify-center items-center text-neutral-300 pb-[20vh]">
          <WelcomeBlock />
          <SocialsBlock />
          <NextSectionButton text="m'kay, tell me more..." href="#About" />
        </div>
        <About />
        <Contact />
        <Gallery />
        <Footer />
        <div id="goUp" className="z-10 lg:w-1 flex justify-center">
          <a className="" href="#">&#8593;</a>
        </div>
      </div>
    </>
  )
};

export default Home;