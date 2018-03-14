<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="false"></Footer>
  </div>
</template>

<script>

  import Footer from './components/Footer.vue'

export default {
components:{
  Footer
}
}
</script>

<style>

</style>
