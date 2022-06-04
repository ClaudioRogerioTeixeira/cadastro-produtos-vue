<template>
  <nav>
    <div class="nav-wrapper">
      <!-- <span>Cadastro Produtos</span> -->
      <router-link to="/" id="logo_url"><img src="../assets/logo.png" alt="Cadastro de Produtos" id="logo"></router-link>      
      <ul id="nav-mobile" class="right">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/produtos">Produtos</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {

    }
  }
}

</script>

<style scoped>
  nav {
    padding-left: 10px;
    background-color: #222;
  }

  nav a {
    font-weight: normal;
    color: #fff;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  nav a:hover {
    color: #fff;
    background: #42b983;
  }

  span {
    font-size: 2em;
  }

  img {
    width: 350px;
    padding: 8px;
  }

  @media only screen and (max-width: 600px) {
    #logo {
      width: 50%;
    }
  }

</style>