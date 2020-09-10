<template>
  <div>
      <h1>Editar</h1>
      {{ palabra.nombre }} - {{ palabra.contenido}}
      <form @submit.prevent="editarpalabra(palabra)">
          <input type="text" v-model="palabra.nombre">
          <input type="text" v-model="palabra.contenido">
          <button type="submit">Editar</button>
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