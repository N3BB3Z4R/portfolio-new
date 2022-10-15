import type { NextPage } from "next";
// import Script from 'next/script'
import Head from "next/head"
import Header from "src/components/Header/Header";
import WelcomeBlock from "src/components/WelcomeBlock/WelcomeBlock";
import SocialsBlock from "src/components/SocialsBlock/SocialsBlock";
import About from "src/components/About/About";
import Footer from "src/components/Footer/Footer";
import Contact from "src/components/Contact/Contact";
import Gallery from "src/components/Gallery/Gallery";
import NextSectionButton from "src/components/NextSectionButton/NextSectionButton";
// import Sun from "src/components/Decorators/Sun";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar Abad - Portfolio</title>
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png"></link>
        <script async src="goUp.js" />
      </Head>
      <div className="flex flex-col gap-4 w-[90vw] lg:w-[70vw] xl:w-[60vw] mx-auto">
        {/* <span className="planet z-1" /> */}
        <span className="stars z-1" />
        <span className="stars2 z-1" />
        <span className="stars3 z-1" />
        {/* <iframe src="https://codepen.io/N3BB3Z4R/full/KKREWzd" style={{ top: '-20rem' }} className="w-full absolute h-screen bg-transparent" width="2000" height="2000" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe> */}
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
        {/* <Script id="goUp-navbar" src="src/utils/goUp.js" strategy="worker" /> */}
      </div>
    </>
  )
};

export default Home;