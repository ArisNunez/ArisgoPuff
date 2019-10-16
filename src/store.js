import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    products: [],
    items: [],
  },
  mutations: {
    setOrders(state, orders){
      state.orders = orders
      state.products = orders.cart.products
    },
    setItems(state, items){
      state.items = items
    }
  },
  actions: {
    async getOrders({commit}){
      const response = await axios.get('https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json')
      
      commit('setOrders', response.data)
    },
    async getItems({commit}){
      const response = await axios.get('https://prodcat.gopuff.com/api/products',{params: {location_id : -1}})
      
      commit('setItems', response.data)
    }
  },
  getters: {
    allOrders: state => state.orders,
    allProducts: state => state.products,
    allItems: state => state.items,
  }
})
