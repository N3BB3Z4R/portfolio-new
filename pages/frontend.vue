<template>
  <div class="container">
    <div>
      <!-- <h2>FRONT-END AND UI/UX</h2>
      <p><i class="fab fa-html5"></i>HTML<i class="fab fa-css3-alt"></i>CSS<i class="fab fa-js"></i>JS, <i class="fab fa-git"></i>GIT/SVN,
      <i class="fab fa-react"></i>React/<i class="fab fa-next"></i>NeXT, <i class="fab fa-vuejs"></i>VUE/NuXT.js, <i class="fab fa-react"></i>React Native, <i class="fab fa-python"></i>Python/Django, <i class="fab fa-php"></i>PHP/<i class="fab fa-laravel"></i>Laravel/<i class="fab fa-symfony"></i>Symfony</p>
      <p>Bulma/Tailwind/Bootstrap, MaterialUI/PureCSS/Gastby, ThreeJS, UI/UX, Mockup & Wireframes (Adobe XD/PS/IL, Pencil, Invision), JIRA/Confluence/Kanban/Gantt, Slack/Trello/Discord</p>
      <p>Heroku/Vercel, <i class="fab fa-aws"></i>AWS/Firebase/CDN, WAMP/XAMP/LAMP/MEAN, MySQL/MSSQL/Oracle, <i class="fab fa-npm"></i>NPM <i class="fab fa-node"></i>Node.js, ExpressJS, MongoDB/MariaDB, SSH/Bash</p>
      <p>Typescript, CharJS, <i class="fab fa-sass"></i>SASS/<i class="fab fa-less"></i>LESS/SCSS, Babel, ESLint, JEST, Pupeteer, Redux, Gulp/Webpack, <i class="fab fa-angular"></i>AngularJS, Headless CMS/Wordpress/Joomla/Drupal, Handlebar, PUG/Jade, jQuery</p>
       -->
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