import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button,Search,Navbar, TabItem,TabContainer, TabContainerItem ,Cell } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})
