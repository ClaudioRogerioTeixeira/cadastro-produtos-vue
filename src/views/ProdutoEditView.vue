<template>
  <div class="container">
    <div class="span-wrapper">
      <span>Alteração Produto</span>
    </div>    
    <form @submit="save()"> <!-- @submit.prevent="save" -->
      <label>Id</label>
      <input type="text" placeholder="Id" v-model="produto.id" readonly>
      <label>Nome</label>
      <input type="text" placeholder="Digite o nome" v-model="produto.nome" required oninvalid="this.setCustomValidity('Campo obrigatório')" onchange="try{setCustomValidity('')}catch(e){}">
      <label>Preco</label>
      <input type="number" placeholder="Digite o preço" v-model="produto.preco" required oninvalid="this.setCustomValidity('Campo obrigatório')" onchange="try{setCustomValidity('')}catch(e){}">
      <button class="waves-effect btn-small darken-1" v-on:click.prevent="voltar()" >Voltar<i class="material-icons right">keyboard_arrow_left</i></button>
      <button class="waves-effect btn-small green darken-1" id="btn-salvar" v-on:click.prevent="save(produto)">Salvar<i class="material-icons right">save</i></button> <!-- $emit('save') -->
    </form>       
  </div>
</template>

<script>
  import { useRoute } from 'vue-router';
  import ProdutosServices from '@/services/produtosServices';

  export default {
    name: 'ProdutoEditView',
    data() {
      return {
        produto: {
          id: null,
          nome: '',
          preco: ''
        }
      }
    },    
    created() {
      const route = useRoute();  
      const prodId = route.params.id;

      ProdutosServices.getProduto(prodId).then( (response) => {
        this.produto = response.data
        M.toast({html: 'Registro carregado com sucesso', classes: 'green'})         
      })      
    },
    methods: {
      save(produto) {
        const router = this.$router;        
        ProdutosServices.putProduto(produto).then( (response) => {
          M.toast({html: 'Registro alterado com sucesso', classes: 'green'})
          router.push('/produtos')
        })  
      },
      voltar() {
        const router = this.$router;
        router.push('/produtos')
        M.toast({html: 'Registro não alterado com sucesso', classes: 'red'}, 500)
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
  #btn-salvar {
    margin-left: 10px;
  }
</style>