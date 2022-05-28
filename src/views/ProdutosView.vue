<template>
  <div class="main">
    <ProdutosGridComponent/>
  </div>
</template>

<script>
import ProdutosGridComponent from '@/components/produtos/ProdutosGridComponent.vue'

export default {
  name: 'ProdutosView',
  components: {
    ProdutosGridComponent,
  }
}
</script>

<style>

</style>