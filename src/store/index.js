import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'
import Router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    tareas: [],
    tarea: {nombre: '', id: ''}
},
mutations: {
    setTareas(state, payload){
        state.tareas = payload
    },
    setTarea(state, payload){
      state.tarea = payload
    },
    setElminarTareas(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
},
actions: {
    getTarea({commit}, idTarea){
      db.collection('tareas').doc(idTarea).get()
      .then(doc =>{
        console.log(doc.id);
        console.log(doc.data)
        let tarea = doc.data()
        tarea.id = doc.id
        commit('setTarea', tarea)
      })
    },
    getTareas({commit}){
        const tareas = []
        db.collection('tareas').get()
        .then(res => {
            res.forEach(doc => {
                //console.log(doc.id)
                //console.log(doc.data())
                let tarea = doc.data()
                tarea.id = doc.id
                tareas.push(tarea)
            })
            commit('setTareas', tareas)
        })
    },
    editarTarea(context,tarea){
      //console.log(tarea.id);
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      }).then(()=> {
        Router.push('/')
      })
    },
    agregarTarea(context, nombreTarea){
      db.collection('tareas').add({nombre: nombreTarea})
      .then(() =>{
          router.push('/')
      })
    },
    eliminarTarea({commit}, id){
      db.collection('tareas').doc(id).delete()
      .then(() => {
        console.log('tarea eliminada');
        commit('setElminarTareas', id)
      })
    }
},
  modules: {
  }
})
