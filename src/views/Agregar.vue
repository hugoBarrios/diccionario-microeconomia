<template>
    <div>
        <h1>Agregar palabra</h1>
        <form @submit.prevent="agregarpalabra(nombre)">
            <input type="text" v-model="nombre">
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data(){
        return{
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarpalabra'])
    }
}
</script>

<style>

</style>