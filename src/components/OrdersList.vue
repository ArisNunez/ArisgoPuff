<template>
    <ul class="order_list">
        <li v-for="(product, index) in allProducts" :key="product.id">
            <div class="remove_btn" @click="removeProduct(product, index)">R</div>
            <ul class="site_structure m1">
                <li>Price: {{product.price}}</li>
                <li>Quantity:
                    <select @change="productAmount($event,product)">
                        <option v-for="amount in amounts" :key="amount.index" :value="amount" :selected="amount == product.quantity">
                            {{amount}}
                        </option>
                    </select>
                </li>
                <li v-if="product.credit_coupon_price != product.price">Discount: {{product.credit_coupon_price}} - <span class="discount_price">{{product.price}}</span></li>
                <li>Product total: {{productTotal(product)}}</li>
            </ul>
        </li>
        <li>
           Subtotal: {{subTotal}}
        </li>
        <li>
            Coupon Credit Price: {{creditSubTotal}}
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'OrdersList',
        methods: {
            ...mapActions(["getOrders"]),
            AddtoCart(product){
                
            },
            productAmount(event, product){
                product.quantity = event.target.value
            },
            productTotal(product){
                return Number(product.price * product.quantity).toFixed(2);
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
            allProducts(){
                return this.$store.getters.allProducts  
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
            this.getOrders();
        }
    }    
</script>

<style >
    
</style>