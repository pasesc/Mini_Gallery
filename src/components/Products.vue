<template>
  <div class="container">
    <div> 
        <div>
          <button 
          @click="selectedCategory = '全部'"
          style="margin:30px;font-size: 35px;text-align: right;"
          >
            全部
          </button>
          <button
           v-for="category in categories"
           :key="category.id"
           @click="selectedCategory = category.name"
           style="margin: 30px;font-size: 35px;text-align:right;" 
           >
            {{ category.name }}
          </button>
        </div>
        <div
          v-for="item in filterProducts"
          :key="item.productId"
          style="display: inline-block;align-items: center;margin:50px;"
        >
          <div>
            <div>
                <router-link
                  :to="'/products/'+item.productId">
                  <img :src="item.src" :alt="item.name">
                </router-link>
            </div>
            <h6>{{ item.name }}</h6>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import productApi from '../assets/productApi'

export default {
    data(){
        return{
            selectedCategory: '全部作品',
            products:[],
            categories:[
            { id: 1, name: '油画' },
            { id: 2, name: '插画' },
            { id: 3, name: '国画' },
            ],
        }
    },
    mounted(){
        productApi.getProdunctCatalog(
            (productCatalogFromServer)=>{
                this.products = productCatalogFromServer;
            },
            ()=>{
                console.log("error");
            }
        )
    },
    methods:{
    },
    computed:{
      filterProducts(){
        if(this.selectedCategory === '全部'){
          return this.products;
        }else{
          return this.products.filter(product => product.sort === this.selectedCategory);
        }
      }
    }
}
</script>

<style>
 .body {
    font-size: 30px;
 }
</style>

