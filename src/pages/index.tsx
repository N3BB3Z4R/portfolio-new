import type { NextPage } from "next";
import Header from "src/components/Header/Header";
import WelcomeBlock from "src/components/WelcomeBlock/WelcomeBlock";
import SocialsBlock from "src/components/SocialsBlock/SocialsBlock";
import About from "src/components/About/About";
import Footer from "src/components/Footer/Footer";
import Contact from "src/components/Contact/Contact";
import Gallery from "src/components/Gallery/Gallery";

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col gap-4 w-[90vw] lg:w-[70vw] xl:w-[60vw] mx-auto">
      <span className="stars z-1" />
      <span className="stars2 z-1" />
      <span className="stars3 z-1" />
      <Header />
      <div className="z-10 h-[100vh] flex flex-col gap-4 justify-center items-center text-neutral-300 pb-[20vh]">
        <WelcomeBlock />
        <SocialsBlock />
        <a className="more" href="#About">m&apos;kay, tell me more...</a>
      </div>
      <About />
      <Contact />
      <Gallery />
      <Footer />
      <div id="goUp" className="z-10 w-full flex justify-center">
        <a className=" w-10" href="#">&#8593;</a>
      </div>
      <script async src="src/utils/goUp.js" />
      {/* <script async src="src/utils/mouseTrail.js" /> */}
    </div>
  )
};

export default Home;