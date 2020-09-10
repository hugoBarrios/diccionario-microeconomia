<template>
<div>
    <h1 class="pb-5">Diccionario de palabras</h1>
    <router-link :to="{name:'Agregar'}">
        <b-button variant="success" block>Agregar palabra al Diccionario</b-button>
    </router-link>
    <b-list-group class="pt-4" >
        <b-list-group-item align-h="center" v-for="(palabra, index) in palabras" :key="index">
            <b-row>
                <b-col cols="8">
                <h4>{{ palabra.nombre}}</h4>
                <p>{{ palabra.contenido}}</p>
            </b-col>
            <b-col cols="4">
                <router-link :to="{name:'Editar', params: {id: palabra.id}}"><b-button variant="warning" class="mr-1">Editar</b-button></router-link><b-button variant="danger" @click="eliminarpalabra(palabra.id)">Eliminar</b-button>
            </b-col>
            </b-row>
        </b-list-group-item>
    </b-list-group>
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