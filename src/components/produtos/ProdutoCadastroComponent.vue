<template>
  <div class="container">
    <div class="span-wrapper">
      <span>Produto Cadastro</span>
    </div>    
    <form @submit="save()"> <!-- @submit.prevent="save" -->
      <label>Nome</label>
      <input type="text" placeholder="Digite o nome" v-model="produto.nome" required oninvalid="this.setCustomValidity('Campo obrigatório')" onchange="try{setCustomValidity('')}catch(e){}">
      <label>Preco</label>
      <input type="number" placeholder="Digite o preço" v-model="produto.preco" required oninvalid="this.setCustomValidity('Campo obrigatório')" onchange="try{setCustomValidity('')}catch(e){}">
      <button class="waves-effect btn-small darken-1" v-on:click.prevent="voltar()" >Voltar<i class="material-icons right">keyboard_arrow_left</i></button>
      <button class="waves-effect btn-small green darken-1" id="btn-salvar" type="submit">Salvar<i class="material-icons right">save</i></button> <!-- $emit('save') -->
    </form>       
  </div>
</template>

<script>
  import ProdutosServices from '@/services/produtosServices';
  import { Router } from 'vue-router';

  export default {
    name: 'ProdutoCadastroComponent',
    emits: ['save'],
    data() {
      return {
        produto: {
          nome: '',
          preco: ''
        }
      }
    },
    methods: {    
      save() {
        M.toast({html: 'Registro incluido com sucesso', classes: 'green'}, 500)
        ProdutosServices.postProduto(this.produto).then( response => {
          setTimeout(() => { this.$emit('save') }, 2000)
        })         
      },
      voltar() {
        // const router = this.$router;
        // router.push('/produtos')
        M.toast({html: 'Registro não incluido com sucesso', classes: 'red'}, 500)
        setTimeout(() => { this.$emit('save') }, 500)
      }
    }
  }
</script>

<style scoped>
  .span-wrapper {
    color: #FFF;
    background:  #42b983;
    /* border-radius: 7px; */
    margin: 20px 0px;
  }
  span {
    font-size: 25px;
    padding-left: 10px;
  }
  #toast-container {
      position: fixed !important;
      bottom: 0px !important;
      left: 0px !important;
  }
  #btn-salvar {
    margin-left: 10px;
  }  
</style>