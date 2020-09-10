<template>
  <div>
      <h1>Editar</h1>
      {{ tarea.id }} - {{ tarea.nombre}}
      <form @submit.prevent="editarTarea(tarea)">
          <input type="text" v-model="tarea.nombre">
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
       this.getTarea(this.id)
    },
    methods:{
        ...mapActions(['getTarea', 'editarTarea']),
        
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>

<style>

</style>