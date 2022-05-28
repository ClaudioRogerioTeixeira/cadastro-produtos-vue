<template>
<div id="main-banner">
  <span class="title">Controle seus Produtos</span>
  <span class="sub-title">Fácil, prático e organizado</span>
  <button><router-link class="routerLink" to="/produtos">Produtos</router-link></button>
</div>
</template>

<script>
  export default {
    name: 'HeroComponent'
  }

</script>

<style scoped>
  #main-banner {
    width: 100%;
    min-height: 460px;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-image: url('@/assets/hero.jpg');
    background-size: cover;    
  }

  .title {
    margin-left: 50px;
    margin-top: 40px;
    font-size: 50px;
  }

  .sub-title {
    margin-left: 50px;
    font-size: 30px;
  }

  button {
    width: 90px;
    height: 30px;
    margin-left: 50px;
    margin-top: 5px;
    color: #FFF;
    font-weight: bold;    
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: .5s;
  }

  button:hover {
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
    background-color: transparent;
  }

  .routerLink{
    color: rgb(6, 138, 37);
  }

  .routerLink:hover{
    color: rgb(255, 255, 255);
  }

  @media only screen and (max-width: 600px) {
    #main-banner {
      display: flex;
      justify-content: start;
      padding-top: 30px;
      background-image: url('@/assets/heroSmall.jpg');
    }

  .title {
    margin-left: 50px;
    margin-top: 40px;
    font-size: 40px;
  }

  .sub-title {
    margin-left: 50px;
    font-size: 25px;
  }    
  }  

</style>