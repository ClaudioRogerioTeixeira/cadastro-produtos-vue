import axios from 'axios';

export default {

  getProdutos:() => {
    return axios.get(`${process.env.VUE_APP_BASE_URL}/produtos`);
  },

  getProduto:(id) => {
    return axios.get(`${process.env.VUE_APP_BASE_URL}/produtos/${id}`)
  },

  postProduto:(produto) => {
    return axios.post(`${process.env.VUE_APP_BASE_URL}/produtos`, produto)
  },

  putProduto:(produto) => {
    return axios.put(`${process.env.VUE_APP_BASE_URL}/produtos/${produto.id}`, produto)
  },

  deleteProduto:(id) => {
    return axios.delete(`${process.env.VUE_APP_BASE_URL}/produtos/${id}`)
  }

}