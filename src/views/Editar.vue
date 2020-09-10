<template>
  <div>
      <router-link :to="{name:'Inicio'}">
        <b-button variant="danger">Volver</b-button>
    </router-link>
      <h1>Editar palabra</h1>
      <form @submit.prevent="editarpalabra(palabra)">
          <div class="form-group">
            <label>Titulo</label>
            <input type="text" v-model="palabra.nombre" class="form-control">
            <label>Definicion</label>
            <textarea v-model="palabra.contenido" class="form-control"></textarea>
          </div>
            <button :disabled="palabra.nombre === '' || palabra.contenido === ''" type="submit" class="btn btn-primary btn-block">Editar</button>
      </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name:'Editar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    created(){
       this.getpalabra(this.id)
    },
    methods:{
        ...mapActions(['getpalabra', 'editarpalabra']),
        
    },
    computed:{
        ...mapState(['palabra'])
    }
}
</script>

<style>

</style>