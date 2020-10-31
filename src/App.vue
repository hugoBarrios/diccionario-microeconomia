<template>
  <div id="app">
    <b-container-fluid>
      <div class="card">
            <div class="card-body ">
              <h1 class="h6" id="main-title">desarrollado con el ❤ por: 🐍 Luis Eduardo Jeréz Girón - 1990-19-6340  ||  🦢 Hugo Ernesto Barrios Rosales - 1990-19-6344 || 🐱 Fernan Emilio Rixquiacche Perez - 1990-19-5454</h1>
            </div>
      </div>
    </b-container-fluid>
    <b-container>
        <b-row class="pt-5" align-h="center">
          <b-col cols="12" md="8">
            <router-view/>
          </b-col>
          <b-col cols="12" md="4" class="border-left ">
              <h1 class="pb-1">Buscar</h1>
              <b-input-group prepend="Titulo" class="mt-3" >
                <b-form-input v-model="texto" @keyup="buscador(texto)"></b-form-input>
               
              </b-input-group>

              <b-list-group class="pt-4" v-if="texto !==''">
                  <b-list-group-item align-h="center" v-for="(palabra, index) in arrayFiltrado" :key="index">
                      <b-row>
                          <b-col cols="8">
                          <h4>{{ palabra.nombre}}</h4>
                          <p>{{ palabra.contenido}}</p>
                      </b-col>
                      <b-col cols="4">
                          <router-link :to="{name:'Editar', params: {id: palabra.id}}"><b-button variant="warning" >Editar</b-button></router-link><b-button class="mt-1" variant="danger" @click="eliminarpalabra(palabra.id)">Eliminar</b-button>
                      </b-col>
                      </b-row>
                  </b-list-group-item>
              </b-list-group>

          </b-col>
        </b-row>
    </b-container>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'Inicio',
    data(){
      return{
        texto: ''
      }
    },
    created(){
        
    },
    methods:{
      ...mapActions(['buscador','eliminarpalabra'])
    },
    computed:{
      ...mapGetters(['arrayFiltrado'])
    }
}
</script>
