<template>
    <div class="container">
      <div v-if="author" class="">
          <div style="display: inline-block;">
              <img :src="author.src" style="display: inline-block; font-size: 30px;">
              <h3 style="font-size: 40px;">{{ author.name }}</h3>
              <p style="font-size: 30px;">简介：{{ author.jianjie }}</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import authorApi from '../assets/authorApi'
  
  
  export default {
      data(){
          return{
              author:null,
          }
      },
      mounted(){
          const authorId = this.$route.params.authorId;
          authorApi.getAuthor(
              Number(authorId),
              (authorFromServer)=>{
                  this.author = authorFromServer;
                  
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