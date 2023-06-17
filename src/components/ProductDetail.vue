<template>
  <div class="container">
    <div v-if="product" class="">
        <div style="display: inline-block;">
            <img :src="product.src" style="display: inline-block;">
            <h2 style="font-size: 40px;">{{ product.name }}</h2>
            <a style="font-size: 30px; color: rgb(224, 21, 31);">价格：{{ product.price }}(元)</a><br><br><br>
            <a style="font-size: 25px;">&emsp;&emsp;{{ product.description }}</a>
        </div>
    </div>
  </div>
</template>

<script>
import productApi from '../assets/productApi'


export default {
    data(){
        return{
            product:null,
        }
    },
    mounted(){
        const productId = this.$route.params.productId;
        productApi.getProduct(
            Number(productId),
            (productFromServer)=>{
                this.product = productFromServer;
                
            },
            ()=>{
                console.log('error');
            }
        )
    }
}
</script>

<style>

</style>