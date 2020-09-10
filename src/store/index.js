import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'
import Router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    palabras: [],
    palabra: {nombre: '', id: '', contenido: ''}
},
mutations: {
    setpalabras(state, payload){
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
                console.log(doc.data())
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
        nombre: palabra.nombre
      }).then(()=> {
        Router.push('/')
      })
    },
    agregarpalabra(context, nombrepalabra){
      db.collection('palabras').add({nombre: nombrepalabra})
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
  }
})
