<template>
    <ul class="product_list">
        <li v-for="(item, index) in allItems" :key="item.id">
            <ul class="site_structure m1">
                <li>Price: {{item.price}}</li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'ProductList',
        methods: {
            ...mapActions(["getItems"]),
            AddtoCart(product){
                
            },
            productAmount(event, product){
                product.quantity = event.target.value
            },
            removeProduct(product, index){
                console.log(this.allProducts)
                this.allProducts.splice(index, 1)
            }
        },
        data(){
            return{
                totals: '',
                amounts: 10
            }
        },
        computed:{
            allItems(){
                return this.$store.getters.allItems  
            },
            subTotal(){
                function getSum(total, num) {
                    return total + (num.price * num.quantity);
                }
                return Number(this.allProducts.reduce(getSum, 0)).toFixed(2);
            },
            creditSubTotal(){
                function getSum(total, num) {
                    return total + (num.credit_coupon_price * num.quantity);
                }
                return Number(this.allProducts.reduce(getSum, 0)).toFixed(2);
            }
        },
        created() {
            this.getItems();
        }
    }    
</script>

<style >
    
</style>