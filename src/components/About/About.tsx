const FrontItems = ['HTML', 'CSS', 'SASS', 'Javascript', 'Typescript', 'GIT', 'CI/CD', 'OOCSS', 'SMACSS', 'BEM', 'Bootstrap', 'Tailwind', 'Styled-Components', 'Bulma', 'PostCSS', 'Gatsby', 'React.js', 'NextJS', 'Vue.js', 'NuxtJS', 'Node.js', 'PaaS (Vercel, Heroku)', 'JEST', 'Testing Libraries', 'Cypress', 'Wordpress', 'Joomla', 'Drupal', 'Headless CMS', 'Photoshop', 'Illustrator', 'XD', 'Invision', 'Figma'];
const VideoItems = ['DaVinci Resolve', 'Adobe Premiere', 'Adobe After Effects', 'Adobe Audition', 'Blender', 'Cinema 4D', 'After Effects', 'VFX', 'Motion Tracker', 'Composition', 'Color Grading', '3D Modeling', 'Photogramety'];
const ThreeDeItems = ['Blender', 'Cinema4D', 'Max', 'Marmoset', 'Unreal Engine', 'Substance Painter', 'Meshroom', 'Cycles', 'Eevee', 'Octane', 'Arnold', 'LuxRender', 'RedShift', 'Vray', 'Corona', 'Modelling', 'Animation', 'Rigging', 'Lighting', 'Shading', 'Compositing', 'Texturing', 'Photogrammetry'];
const ManagingItems = ['JIRA', 'Confluence', 'Kanban', 'SCRUM', 'Sprint', 'Agile Methodologies', 'Project Management', 'Team Building', 'Communication', 'Leadership', 'Time Management', 'More than 6 years of experience working with multicultural professionals from all around the world.'];

const About = () => {
  return (
    <div id="About" className="text-[#b1dddd] w-full bg-gray-300/10 py-10 px-6 lg:px-32 rounded-xl mx-auto flex flex-col xl:gap-16 justify-center items-center">
      <div className="flex flex-col xl:flex-row xl:gap-16">
        <div className="w-full xl:w-[40%]">
          <h1 className="text-3xl font-bold text-center">About</h1>
          <p>Hi! I&apos;m Front End Developer & UI/UX, and Creative designer as 3D designer and animator, video productor & postproduction, and other related roles including managing small teams and project managing with agile methods. I&apos;ve been rotating between this roles through 20 last years.</p>
        </div>
        <hr className="w-full block xl:hidden my-8 border-transparent" />
        <div className="xl:w-[60%]">
          <h1 className="text-3xl font-bold text-center">Skills</h1>
          <h4>More than 20 years of experience on:</h4>
          <div className="">
            <p className="mb-4 mt-6 text-lg">Front End Developer & UI/UX Designer:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {FrontItems.map((item) => (
                <span key={item} className="hover:bg-blue-300 transition hover:text-neutral-800 bg-yellow-500/50 px-2 rounded-lg cursor-default">{item}</span>
              ))}
              {/* <ul>
            <li>HTML, CSS, SASS, Javascript, TypeScript, GIT, CI/CD.</li>
            <li>OOCSS, SMACSS, BEM, Bootstrap, Tailwind, Styled-Components, Bulma, PostCSS, Gatsby.</li>
            <li>React.js, NextJS, Vue.js, NuxtJS, Node.js, PaaS (Vercel, Heroku).</li>
            <li>JEST, Testing Libraries, Cypress, </li>
            <li>Wordpress, Joomla, Drupal, Headless CMS.</li>
            <li>Photoshop, Illustrator, XD, Invision, Figma.</li>
          </ul> */}
            </div>
            <p className="mb-4 mt-6 text-lg">Video Productor & Postproduction:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {VideoItems.map((item) => (
                <span key={item} className="hover:bg-blue-300 transition hover:text-neutral-800 bg-yellow-500/50 px-2 rounded-lg cursor-default">{item}</span>
              ))}
              {/* <ul>
            <li>DaVinci Resolve, Adobe Premiere, Adobe After Effects, Adobe Audition.</li>
            <li>Blender, Cinema 4D, After Effects.</li>
            <li>VFX, Motion Tracker, Composition, Color Grading, 3D Modelling, Photogrammetry.</li>
          </ul> */}
            </div>
            <p className="mb-4 mt-6 text-lg">3D & Motion Graphics:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {ThreeDeItems.map((item) => (
                <span key={item} className="hover:bg-blue-300 transition hover:text-neutral-800 bg-yellow-500/50 px-2 rounded-lg cursor-default">{item}</span>
              ))}
              {/* <ul>
            <li>Blender, Cinema4D, Max, Marmoset, Unreal Engine, Substance Painter, Meshroom.</li>
            <li>Cycles, Eevee, Octane, Arnold, LuxRender, RedShift, Vray, Corona.</li>
            <li>Modelling, Animation, Rigging, Lighting, Shading, Compositing, Texturing, Photogrammetry.</li>
          </ul> */}
            </div>
            <p className="mb-4 mt-6 text-lg">Team & Project Managing:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {ManagingItems.map((item) => (
                <span key={item} className="hover:bg-blue-300 transition hover:text-neutral-800  bg-yellow-500/50 px-2 rounded-lg cursor-default">{item}</span>
              ))}
              {/* <ul>
            <li>JIRA, Confluence, Kanban, SCRUM, Sprint, Agile Methodologies.</li>
            <li>Project Management, Team Building, Communication, Leadership, Time Management.</li>
            <li>More than 6 years of experience working with multicultural professionals from all around the world.</li>
          </ul> */}
            </div>
          </div>
        </div>
      </div>
      <a className="more w-full text-center" href="#Gallery">well, take me to the gallery...</a>
    </div>
  );
}
export default About;