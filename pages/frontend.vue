<template>
  <div class="container">
    <div>
      <h2>SKILLS</h2>
      <p>HTML/CSS/JS, GIT/SVN, React/NeXT, VUE/NuXT.js, React Native, Python/Django, PHP/Laravel/Symfony</p>
      <p>Bulma/Tailwind/MaterialUI/Bootstrap/PureCSS/Gastby, ThreeJS, UI/UX, Mockup & Wireframes (Adobe XD/PS/IL, Pencil, Invision), JIRA/Confluence/Kanban/Gantt/Slack/Trello/Discord</p>
      <p>Heroku/Vercel, AWS/CDN, WAMP/XAMP/LAMP/MEAN, MySQL/MSSQL/Oracle, NPM/Node.js, ExpressJS, MongoDB/MariaDB, SSH/Bash</p>
      <p>Typescript, SASS/LESS/SCSS, Babel, ESLint, JEST, Pupeteer, Gulp/Webpack, AngularJS, Headless CMS/Wordpress/Joomla/Drupal, Handlebar, PUG/Jade, jQuery</p>
    </div>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<style>
p {
    width: 70%;
    margin: 20px auto;
}
</style>