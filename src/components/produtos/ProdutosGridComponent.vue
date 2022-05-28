<template>  
  <div class="container" v-show="!isEditing">  
    <div class="span-wrapper">
      <span>Produtos Grid</span>
    </div>      
    <div class="btn-wrapper">
      <button class="waves-effect btn-small green darken-1 btnAdd" v-on:click="add"><i class="material-icons">add</i></button>
    </div>
    <div class="table-wrapper">
      <table>

        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th><i class="material-icons">settings</i></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in produtos" :key="row.id">
            <td>{{row.id}}</td>
            <td>{{row.nome}}</td>
            <td>{{row.preco}}</td>
            <td>             
              <router-link :to="`/edit/${row.id}`">
                <button class="waves-effect btn-small green darken-1"><i class="material-icons">create</i></button> <!-- v-on:click="edit(row.id)" -->
              </router-link>
              <button class="waves-effect btn-small red darken-1" v-on:click="delet(row)"><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
        
      </table>
    </div>   
  </div>
  <ProdutoCadastroComponent @save="saveProduto" v-show="isEditing"/>
</template>

<script>
  import ProdutosServices from '@/services/produtosServices';
  import ProdutoCadastroComponent from '@/components/produtos/ProdutoCadastroComponent.vue'

  export default {
    name: 'ProdutosGridComponent',
    emits: ['add', 'edit'],
    components: {
      ProdutoCadastroComponent
    }, 
    data() {
      return {
        produtos: [],
        isEditing: false
      }
    },
    created() {
      this.getProdutos()
    },
    methods: {
      getProdutos() {
        ProdutosServices.getProdutos().then( response => {
          this.produtos = response.data
        })           
      },
      add() {
        this.isEditing = true;
      },
      // edit(id) {
      //   console.log('id', id)
      // },
      saveProduto() {
        this.isEditing = false;
      },
      delet(row) {
        ProdutosServices.deleteProduto(row.id).then( () => {
          this.getProdutos()
          M.toast({html: 'Registro removido com sucesso', classes: 'green'})         
        })
      }
    },
    mounted() {
      // this.getProdutos()
    }    
  }

</script>

<style scoped>
  .btn-wrapper {
    display: flex;
    justify-content: end;
  }
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
  .btnAdd {
    margin-bottom: 10px;
  }
  .table-wrapper {
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
  }
  th {
    background: white;
    position: sticky;
    top: 0;
    padding: 10px;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }  
</style>