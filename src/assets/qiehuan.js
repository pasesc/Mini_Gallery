export default {
    name: "sortstick",
    data(){
      return{
      // 0：默认布局为一栏式
      // 1：两栏式
          lay_type:0, 
      }
    },
    methods:{
  /***
   *  排列布局按钮
   * 在父容器上设置点击按钮,
   * 然后进行判断，
   * 如果值（this.lay_type == 0）相等，
   * 就为false(或者等于另外的值,例如：this.lay_type = 1)，
   * 反之，值不等就为true;(或者等于原值,例如：this.lay_type = 0)
   */
      layOut(){
        if(this.lay_type == 0){
          this.lay_type = 1
        }else{
           this.lay_type = 0
        }
      }
    } 
  }
