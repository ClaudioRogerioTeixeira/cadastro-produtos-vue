<template>
  <footer>
    <p>Cadastro Produtos &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    color: #fff;
    background-color: #222;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }
</style>