<template>
<div>
  <div id="wrapper">
    <div id="content">
      <AppHeader :title="headerTitle[$nuxt.$route.name]"/>
      <div class="space-sticky"></div>
      <Nuxt />
    </div>
    <BottomNavigation :selected="$nuxt.$route.name"/>
  </div>
  <MenuSideBar/>
</div>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: {
        settings: 'Account',
        index: 'Z5rk.',
        search: 'Discover',
        favoris: 'Favoris',
      }
    }
  },
  head() {
    return {
      script: [
        {
          src: '/js/bootstrap.bundle.min.js'
        }
      ],
    }
  },
  methods: {}
}
</script>