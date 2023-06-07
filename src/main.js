import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import inicioPage from './components/Inicio';
import listarArticulos from './components/ListarArticulo';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';
import contactoPage from './components/Contacto';

import VueRouter from 'vue-router';

Vue.component('inicioPage', inicioPage);
Vue.component('listarArticulos', listarArticulos);
Vue.component('crearArticulo', crearArticulo);
Vue.component('editarArticulo', editarArticulo);
Vue.component('contactoPage', contactoPage);

Vue.use(VueRouter);

//definimos las rutas
const routes = [
  {path:'/', component:inicioPage},
  {path:'/inicio',component:inicioPage},
  {path:'/articulos', component:listarArticulos},
  {path:'/crear', component:crearArticulo, name:'crearArticulo'},
  {path:'/editar/:id', component:editarArticulo, name:'editarArticulo'},
  {path:'/contacto',component:contactoPage},
  
]

//crearmos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})




Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
