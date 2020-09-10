<template>
    <div>
        <router-link :to="{name:'Inicio'}">
        <b-button variant="danger">Volver</b-button>
        </router-link>
        <h1>Agregar palabra</h1>
        <form @submit.prevent="agregarpalabra({nombre,contenido})">
        <div class="form-group">
            <label>Titulo</label>
            <input required type="text" class="form-control" v-model="nombre">
            <label>Definicion</label>
            <textarea required class="form-control" v-model="contenido"></textarea>
        </div>
            <button :disabled="nombre === '' || contenido === ''" type="submit" class="btn btn-primary btn-block">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data(){
        return{
            nombre: '',
            contenido: ''
        }
    },
    methods:{
        ...mapActions(['agregarpalabra'])
    }
}
</script>

<style>

</style>