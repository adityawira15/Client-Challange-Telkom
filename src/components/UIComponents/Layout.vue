<template>

  <div>
    <app-sidebar></app-sidebar>
    <div class="main-content">
      <router-view/>
    </div>
  </div>

</template>

<script>
// import sidebar
import Sidebar from '@/components/UIComponents/Sidebar'
import Breadcrums from '@/components/UIComponents/Breadcrums'

export default {
  components: {
    'app-sidebar': Sidebar,
    'ui-breadcrums': Breadcrums
  },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'aeou',
      languages: [
      { text: 'English', value: 'en' },
      { text: 'Indonesia', value: 'id' }
      ],
      langs: 'en'
    }
  },
  name: 'App',
  methods: {
    setLang: (lang)=> {
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>
