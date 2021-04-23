<template>
  <div class="blade-item" :class="{active:isOpen}">
      <router-link :to="this.newPath" active-class="router-link-active" exact >
          <slot name="bladeItem">Default item</slot>
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newPath:''
        }
    },
    props:{
        isOpen:{
            type:Boolean,
            required:true
        },
        childToPath:{
            type:String,
            // required:true
        }
    },
    methods:{
        updatePath(){
            this.newPath = "/document" + this.childToPath
            // console.log(this.childToPath)
        }
    },
    mounted(){
        this.updatePath()
        // console.log(this.childToPath)
    }
    
}
</script>

<style scoped>
    .blade-item{
        font-weight: normal;
        display: none;
        cursor: pointer;
        line-height: 36px;
    }
    .blade-item a {
        color: rgb(128, 128, 128);
        text-decoration: none;
    }
    .blade-item a:hover{
        color: rgb(0, 0, 0);
    }
    .active{
        display: block;
    }
    .router-link-active{
        font-weight: bolder;
        /* 此处因为权重问题需要加上important */
        color: #000 !important;
        /* background: #000; */
    }
</style>