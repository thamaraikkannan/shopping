import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    card: [],
    searchProduct: '',
    filteredCount: '',
    initialLength: '',
  },
  mutations: {
    getProducts(state, products){
      state.initialLength = products.length;
        state.products = products
    },
    searchedProducts(state, searchProduct){
      state.searchProduct = searchProduct;
      console.log(state.searchProduct);
    },
    filterProductCount(state, filteredCount){
      state.filteredCount = filteredCount;
      console.log(filteredCount.length)
    },
  },
  actions: {
    getProductsAction({commit}){
      axios('http://localhost:3001/products')
      .then(res => {
        console.log(res.data);
        commit('getProducts', res.data)
      })
    },
    filterProducts(context,payload){
      const searchPro = payload;
      context.commit('searchedProducts', searchPro)
    },
    filterCount(context,payload){
      const filterPro = payload;
      context.commit('filterProductCount', filterPro)
    },
  },
  modules: {
   
  },
})