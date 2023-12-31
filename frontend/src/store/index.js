import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import auth from './modules/auth';
import product from "./modules/products";
import order from "./modules/orders";
import cart from "./modules/cart";
import loader from "./modules/loader";

Vue.use(Vuex)

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export default new Vuex.Store({
  modules: {
    auth,
    product,
    order,
    cart,
    loader,
  }
})
