<template>
    <form @submit.prevent="addProduct">
        <ul class="site_structure">
            <li>
                <input type="text" v-model="size">
            </li>
        </ul>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'AddProduct',
        data(){
            return{
                size: ''
            }
        },
        methods: {
            addProduct(){

            }
        }
    }
</script>

<style>

</style>