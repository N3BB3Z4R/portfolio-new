<template>
  <div class="container">
    <div>
      <h2>FRONT-END AND UI/UX</h2>
      <p>HTML/CSS/JS, GIT/SVN, React/NeXT, VUE/NuXT.js, React Native, Python/Django, PHP/Laravel/Symfony</p>
      <p>Bulma/Tailwind/Bootstrap, MaterialUI/PureCSS/Gastby, ThreeJS, UI/UX, Mockup & Wireframes (Adobe XD/PS/IL, Pencil, Invision), JIRA/Confluence/Kanban/Gantt, Slack/Trello/Discord</p>
      <p>Heroku/Vercel, AWS/Firebase/CDN, WAMP/XAMP/LAMP/MEAN, MySQL/MSSQL/Oracle, NPM/Node.js, ExpressJS, MongoDB/MariaDB, SSH/Bash</p>
      <p>Typescript, CharJS, SASS/LESS/SCSS, Babel, ESLint, JEST, Pupeteer, Redux, Gulp/Webpack, AngularJS, Headless CMS/Wordpress/Joomla/Drupal, Handlebar, PUG/Jade, jQuery</p>
      
      <Gallery :images="imagesFrontend" />

    </div>
  </div>
</template>

<script>
import { IMAGES_FRONTEND } from '../constants/images.js'
export default {
  data() {
    return { imagesFrontend: IMAGES_FRONTEND }
  }
}
</script>

<style>
p {
    width: 70%;
    margin: 20px auto;
}
</style>