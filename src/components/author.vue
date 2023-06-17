<template>
  <div class="container">
    <div> 

        <div
          v-for="item in author"
          :key="item.authorId"
          style="display: inline-block;align-items: center;margin:85px"
        >
          <div>
            <div>
                <router-link
                  :to="'/author/'+item.authorId">
                  <img :src="item.src" :alt="item.name">
                </router-link>
            </div>
            <h6 style="font-size: 40px;">{{ item.name }}</h6>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import authorApi from '../assets/authorApi'

export default {
  data(){
        return{
            author:[],
        }
    },
    mounted(){
        authorApi.getauthorCatalog(
            (authorCatalogFromServer)=>{
                this.author = authorCatalogFromServer;
            },
            ()=>{
                console.log("error");
            }
        )
    },
    methods:{
    },
}
</script>

<style>

</style>

