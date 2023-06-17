<template>
    <div class="gallery">
      <div class="thumbnail" v-for="(painting, index) in paintings" :key="painting.id"
        :style="{ zIndex: index === hoverIndex ? 1 : 0 }"
       style="display: inline-block;float: center;margin: 24px;"
       @mouseover="hoverIndex = index" @mouseleave="hoverIndex = -1">
       <img :src="painting.thumbnail" :alt="painting.name" :data-index="index" style="border: 50cm;border-color: antiquewhite;">
       <div class="caption" :style="{ display: hoverIndex === index ? 'block' : 'none' }">
         <h3>{{ painting.name }}</h3>
         <p>作者：{{ painting.author }}</p>
         <p>时间：{{ painting.date }}</p>
       </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      paintings: [
        {
          id: 1,
          name: '星空',
          author: '文森特·威廉·梵高',
          date: '1889年',
          thumbnail:require('../assets/星空.jpg')
        },
        {
          id: 2,
          name: '花瓶中15朵向日葵',
          author: '文森特·威廉·梵高',
          date: '1888年8月',
          thumbnail:require('../assets/向日葵.jpg')
        },
        {
          id: 3,
          name: '掀开海水',
          author: 'Guy Billout',
          date: '2022年',
          thumbnail:require('../assets/掀开海水.jpg')
        },
        {
          id: 4,
          name: '滑板沙滩',
          author: 'Yukiko Noritake',
          date: '2022-03-01',
          thumbnail:require('../assets/滑板.jpg')
        },
        {
          id: 5,
          name: '极光之境',
          author: 'Yukiko Noritake',
          date: '2020-02-01',
          thumbnail:require('../assets/极光.jpg')
        },
        {
          id: 6,
          name: '湖中真实的自己',
          author: 'Yukiko Noritake',
          date: '2021-05-07',
          thumbnail:require('../assets/湖中看自己.jpg')
        },
        {
          id: 7,
          name: '篝火之约',
          author: '未知',
          date: '2019-09-06',
          thumbnail:require('../assets/篝火.jpg')
        },
        {
          id: 8,
          name: '瞭望广播塔',
          author: '未知',
          date: '2018-05-09',
          thumbnail:require('../assets/广播塔.jpg')
        },
        {
          id: 9,
          name: '海上风车',
          author: '未知',
          date: '2018-04-20',
          thumbnail:require('../assets/风车.jpg')
        },
        {
          id: 10,
          name: '看日出',
          author: '无名',
          date: '2020-02-08',
          thumbnail:require('../assets/画作看日出.jpg')
        },
        {
          id: 11,
          name: '画中有诗',
          author: '袁松年',
          date: '未知',
          thumbnail:require('../assets/画中有诗1.jpg')
        },
        {
          id: 12,
          name: '画中有诗(2)',
          author: '袁松年',
          date: '未知',
          thumbnail:require('../assets/画中有诗2.jpg')
        },
        {
          id: 13,
          name: '画中有诗(3)',
          author: '袁松年',
          date: '未知',
          thumbnail:require('../assets/画中有诗3.jpg')
        },
      ],
      hoverIndex: -1
    }
  }
}
</script>

<style>
.thumbnail {
  position: relative;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>
