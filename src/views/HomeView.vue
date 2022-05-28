<template>
  <div class="main">
    <HeroComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent
  }
}
</script>

<style scoped>
  .container {
    
  }

</style>
