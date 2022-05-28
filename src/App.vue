<template>
    <HeaderComponent />
    <router-view/>
    <FooterComponent />
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue'
  export default {
    name: 'App',
    components: {
    HeaderComponent,
    FooterComponent
  }    
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: #f3f3f3;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
