<template>
  <div id="maintext">
    <p>
      Im Front End Developer & UI/UX, and Creative designer as 3D designer and animator, video productor & postproduction, and other related roles including managing little teams and project managing with agile methods. I've been rotating between this roles through 20 last years.
    </p>
    <h4>More than 20 years of experience on:</h4>
    <div class="skills">
      <div class="skill">
        <p>Front End Developer & UI/UX Designer</p>
        <ul>
          <li>HTML, CSS, SASS, Javascript, TypeScript, GIT.</li>
          <li>Bootstrap, Tailwind, Styled-Components, Bulma, PostCSS, Gatsby.</li>
          <li>React.js, Vue.js, Node.js, JEST, PaaS (Vercel, Heroku).</li>
          <li>Wordpress, Joomla, Drupal, Headless CMS.</li>
          <li>Photoshop, Illustrator, XD, Invision.</li>
        </ul>
      </div>
      <div class="skill">
        <p>Video Productor & Postproduction</p>
        <ul>
          <li>DaVinci Resolve, Adobe Premiere, Adobe After Effects, Adobe Audition.</li>
          <li>Blender, Cinema 4D, After Effects.</li>
          <li>VFX, Motion Tracker, Composition, Color Grading, 3D Modelling, Photogrammetry.</li>
        </ul>
      </div>
      <div class="skill">
        <p>3D & Motion Graphics</p>
        <ul>
          <li>Blender, Cinema4D, Max, Marmoset, Unreal Engine, Substance Painter, Meshroom.</li>
          <li>Cycles, Eevee, Octane, Arnold, LuxRender, RedShift, Vray, Corona.</li>
          <li>Modelling, Animation, Rigging, Lighting, Shading, Compositing, Texturing, Photogrammetry.</li>
        </ul>
      </div>
      <div class="skill">
        <p>Team & Project Managing</p>
        <ul>
          <li>JIRA, Confluence, Kanban, SCRUM, Sprint, Agile Methodologies.</li>
          <li>Project Management, Team Building, Communication, Leadership, Time Management.</li>
          <li>More than 6 years of experience working with multicultural professionals from all around the world.</li>
        </ul>
      </div>
    </div>
    <a class="more" href="#header">back to top</a>
  </div>
</template>

<style scoped>

/* @media screen and (max-width: 768px) {
  .skills {
    display: grid;
    grid-template-columns: 4fr;
    grid-gap: 20px;
    margin-top: 50px;
  }
} */

  #maintext {
    font-size: 0.9rem;
    height: 85vh;
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--primary);
    margin-bottom: 0;
    padding-bottom: 0;
  }
  h4 {
    color: var(--primary);
    font-weight: 300;
    font-size: 1.3rem;
    padding-top: 20px;
  }
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 60px 0;
    cursor: default;
  }
  /*
  .skill {
    border: 1px solid var(--primary);
    border-radius: 20px;
  } */
  ul {
    list-style-type: none;
    padding: 0;
    
  }
  li {
    font-size: 0.7rem;
    font-weight: 400;
  }
</style>