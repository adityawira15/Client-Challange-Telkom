<template>
  <div>
    

<nav class="navbar-primary">
      <img style="width: 314px; height: 110px; margin: 10px 0px 0px 10px; left: 10px;" src="http://telkomcodex.io/static/codex-logo.png" >
  <ul class="navbar-primary-menu">
    <li>
      <a href="/project" v-on:click="setActive('project')" v-bind:class="[isActive == 'project' ? 'active' : '']"><span></span><span class="nav-label">Project</span></a>
      <a href="/teamperformance" v-on:click="setActive('teamperformance')" v-bind:class="[isActive == 'teamperformance' ? 'active' : '']">Team Perfomance</a>
      <a href="/calendar" v-on:click="setActive('calendar')" v-bind:class="[isActive == 'calendar' ? 'active' : '']">Calendar</a>
    </li>
  </ul>
</nav>
    
  </div>
</template>

<style>
.main-content {
  background-color: #f5f7fa;
}
.active {
  border-bottom: 3px solid blue
}
.logo {
  width: 320px;
  height: 153px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
}
  .navbar-global {
  background-color: indigo;
}

.navbar-global .navbar-brand {
  color: white;
}

.navbar-global .navbar-user > li > a
{
  color: white;
}

.navbar-primary {
  height: 760px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  bottom: 0px;
  left: 0px;
  position: absolute;
  top: -1px;
  width: 332px;
  z-index: 8;
  overflow: hidden;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.navbar-primary.collapsed {
  width: 60px;
}

.navbar-primary.collapsed .glyphicon {
  font-size: 22px;
}

.navbar-primary.collapsed .nav-label {
  display: none;
}

.btn-expand-collapse {
    position: absolute;
    display: block;
    left: 0px;
    bottom:0;
    width: 100%;
    padding: 8px 0;
    border-top:solid 1px #666;
    color: grey;
    font-size: 20px;
    text-align: center;
}

.btn-expand-collapse:hover,
.btn-expand-collapse:focus {
    background-color: #222;
    color: white;
}

.btn-expand-collapse:active {
    background-color: #111;
}

.navbar-primary-menu,
.navbar-primary-menu li {
  margin:0; padding:0;
  list-style: none;
}

.navbar-primary-menu li a {
  display: block;
  padding: 10px 18px;
  text-align: left;
  /*border-bottom:solid 1px #444;*/
  color: black;
}

.navbar-primary-menu li a:hover {
  background-color: #000;
  text-decoration: none;
  color: white;
}

.navbar-primary-menu li a .glyphicon {
  margin-right: 6px;
}

.navbar-primary-menu li a:hover .glyphicon {
  color: orchid;
}

.main-content {
  margin-left: 320px;
  padding: 20px;
  min-height: 750px;
}

.collapsed + .main-content {
  margin-left: 60px;
}
</style>

<script>
export default {
  data () {
    return {
      activeItem: 'project',
      isActive: localStorage.name,
      items: [
      { icon: 'list', text: 'Project', link: '/project' },
      { icon: 'list', text: 'Team Perfomance', link: '/teamperformance' },
      { icon: 'list', text: 'Calendar', link: '/calendar' },
      ]
    }
  },
  methods: {
    // isActive: function (menuItem) {
    //   return this.activeItem === localStorage.name
    // },
    setActive: function (menuItem) {
      localStorage.name = menuItem
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
}
</script>

