<template>
  <div class="home site_contain">
    <ul class="site_structure column three_1 product_page">
      <li>
        <!-- <ProductList /> -->
      </li>
      <li>
        <h2 class="section_title">Cart Products:</h2>
        <OrdersList />
      </li>
    </ul>    
  </div>
</template>

<script>
  import OrdersList from '../components/OrdersList'
  import AddProduct from '../components/AddProduct.vue'
  //import ProductList from '../components/ProductList.vue'
  export default {
    name: 'home',
    data(){

    },
    components:{
      OrdersList,
      AddProduct,
      //ProductList
    }
  }
</script>
