<template>
<div>
    inicio
    <router-link :to="{name:'Agregar'}">
    <button>Agregar</button>
    </router-link>|
    <ul>
        <li v-for="(tarea, index) in tareas" :key="index">{{ tarea.nombre}} - {{ tarea.id}} <router-link :to="{name:'Editar', params: {id: tarea.id}}"><button>Editar</button></router-link><button @click="eliminarTarea(tarea.id)">Eliminar</button></li>
    </ul>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Inicio',
    created(){
        this.getTareas()
    },
    methods:{
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>

<style>

</style>