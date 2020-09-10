<template>
<div>
    inicio
    <router-link :to="{name:'Agregar'}">
    <button>Agregar</button>
    </router-link>|
    <ul>
        <li v-for="(palabra, index) in palabras" :key="index">{{ palabra.nombre}} - {{ palabra.contenido}} <router-link :to="{name:'Editar', params: {id: palabra.id}}"><button>Editar</button></router-link><button @click="eliminarpalabra(palabra.id)">Eliminar</button></li>
    </ul>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Inicio',
    created(){
        this.getpalabras()
    },
    methods:{
        ...mapActions(['getpalabras', 'eliminarpalabra'])
    },
    computed:{
        ...mapState(['palabras'])
    }
}
</script>

<style>

</style>