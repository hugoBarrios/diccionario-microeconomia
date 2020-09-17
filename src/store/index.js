import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'
import Router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    palabras: [],
    palabra: {nombre: '', id: '', contenido: ''},
    texto: ''
},
mutations: {
    setpalabras(state, payload){
      payload.sort(function(a, b) {
        var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
        var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      state.palabras = payload
    },
    setpalabra(state, payload){
      state.palabra = payload
    },
    setElminarpalabras(state, payload){
      state.palabras = state.palabras.filter(item => item.id !== payload)
    }
},
actions: {
    buscador({state}, payload){
      console.log(payload);
      state.texto = payload.toLowerCase();
    },
    getpalabra({commit}, idpalabra){
      db.collection('palabras').doc(idpalabra).get()
      .then(doc =>{
        console.log(doc.id);
        console.log(doc.data)
        let palabra = doc.data()
        palabra.id = doc.id
        commit('setpalabra', palabra)
      })
    },
    getpalabras({commit}){
        const palabras = []
        db.collection('palabras').get()
        .then(res => {
            res.forEach(doc => {
                //console.log(doc.data())
                //console.log(doc.data())
                let palabra = doc.data()
                palabra.id = doc.id
                palabras.push(palabra)
            })
            
            commit('setpalabras', palabras)
        })
    },
    editarpalabra(context,palabra){
      //console.log(palabra.id);
      db.collection('palabras').doc(palabra.id).update({
        nombre: palabra.nombre,
        contenido: palabra.contenido
      }).then(()=> {
        Router.push('/')
      })
    },
    agregarpalabra(context, params){
      db.collection('palabras').add({nombre: params.nombre, contenido: params.contenido})
      .then(() =>{
          router.push('/')
      })
    },
    eliminarpalabra({commit}, id){
      db.collection('palabras').doc(id).delete()
      .then(() => {
        console.log('palabra eliminada');
        commit('setElminarpalabras', id)
      })
    }
},
modules: {
  },
getters:{
  arrayFiltrado(state){
    let arregloFiltrado = []
    for(let palabra of state.palabras){
      let nombre = palabra.nombre.toLowerCase();
      if(nombre.indexOf(state.texto) >= 0){
        arregloFiltrado.push(palabra)
      }
    }
    return arregloFiltrado;
  }
}
})
