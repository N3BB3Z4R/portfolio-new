import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/Header/Header";
import WelcomeBlock from "src/components/WelcomeBlock/WelcomeBlock";
import SocialsBlock from "src/components/SocialsBlock/SocialsBlock";
import About from "src/components/About/About";
import Footer from "src/components/Footer/Footer";
import Contact from "src/components/Contact/Contact";
import Gallery from "src/components/Gallery/Gallery";
import NextSectionButton from "src/components/NextSectionButton/NextSectionButton";
import Script from "next/script";
import GoUpButton from "src/components/GoUpButton/GoUpButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar Abad - Portfolio</title>
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon.png"
        ></link>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Oscar Abad Portfolio - Front End Dev, Video Production, 3D & Mograph"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Typescript, React JS, Vue JS, Tailwind, SCSS, dev, developer, freelance, designer, animator, modeler, video editor, postproducer, Frontend, Front, End, design, 3d, video, postproduction, animation, github, Context, Redux, Hooks, GIT, bitbucket, CI/CD, OOCSS, SMACSS, BEM, Bootstrap, Tailwind, Styled-Components, Bulma, PostCSS, Gatsby, React.js, NextJS, Vue.js, NuxtJS, Node.js, Electron, Docker, Docker Composer, AWS, Amplify, S3, Cognito, PaaS, Vercel, Heroku, JEST, Testing Libraries, Cypress, Wordpress, Joomla, Drupal, Headless CMS, Adobe Photoshop, Adobe Illustrator, Adobe Lightroom, Adobe InDesign, Adobe XD, Invision, Figma, Linux, Windows, MacOS, Video Productor, DaVinci Resolve, Adobe CC, Adobe Premiere, Adobe After Effects, Adobe Audition, Adobe Photoshop, Adobe Illustrator, Adobe Lightroom, Blender, Cinema 4D, VFX, Motion Tracker, Composition, Color Grading, Cameraman, 2D design, branding, 3D Modeling, Photography, Mograph, 3D & Motion Graphics, Blender, Cinema4D, 3d studio Max, Marmoset, Unreal Engine, Substance Painter, Meshroom, Cycles, Eevee, Octane, Arnold, LuxRender, RedShift, Vray, Corona, Modelling, Animation, Rigging, Lighting, Shading, Compositing, Texturing, Photogrammetry, Team Management, JIRA, Confluence, Kanban, SCRUM, Sprint, Agile, Methodologies, Project Management, Team Building, Communication, Leadership, Time Management, SOP, Horizontal communication between departments"
        />
        <meta name="author" content="Oscar Abad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script async src="go-up.js" /> */}
      </Head>
      <Script src="go-up.js" />
      <div className="main mx-auto flex h-full w-[90vw] flex-col gap-4 lg:w-[70vw] xl:w-[60vw]">
        <div className="parallax position relative overflow-hidden">
          <span className="stars z-1" />
          <span className="stars2 z-1" />
          <span className="stars3 z-1" />
        </div>
        <Header />
        <div className="z-10 flex h-[100vh] flex-col items-center justify-center gap-4 pb-[20vh] text-neutral-300">
          <WelcomeBlock />
          <SocialsBlock />
          <NextSectionButton text="m'kay, tell me more..." href="#About" />
        </div>
        <About />
        <Contact />
        <Gallery />
        <Footer />
        <GoUpButton />
        <div className="h-2">G</div>
      </div>
    </>
  );
};

export default Home;
