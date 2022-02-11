<template>
  <div class="container">
    <div>
      <!-- <h2>3D ANIMATION & DESIGN</h2>
      <p>HTML/CSS/JS, GIT/SVN, React/NeXT, VUE/NuXT.js, React Native, Python/Django, PHP/Laravel/Symfony</p>
      <p>Bulma/Tailwind/MaterialUI/Bootstrap/PureCSS/Gastby, ThreeJS, UI/UX, Mockup & Wireframes, JIRA/Confluence/Kanban/Gantt/Slack/Trello/Discord</p>
      <p>Heroku/Vercel, AWS/CDN, WAMP/XAMP/LAMP/MEAN, MySQL/MSSQL/Oracle, Node.js, ExpressJS, MongoDB/MariaDB, SSH/Bash</p>
      <p>Typescript, SASS/LESS/SCSS, Babel, ESLint, JEST, Pupeteer, AngularJS, Headless CMS/Wordpress/Joomla/Drupal</p>
     -->
      <Gallery :images="images3d" />

    </div>
  </div>
</template>

<script>
import { IMAGES_3D } from '../constants/images.js'
export default {
  data() {
    return { images3d: IMAGES_3D }
  }
}
</script>

<style>
</style>