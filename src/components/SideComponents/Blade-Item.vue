<template>
  <div class="blade-item" :class="{active:isOpen}">
      <slot name="bladeItem">Default item</slot>
  </div>
</template>

<script>
export default {
    props:{
        isOpen:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
           
        }
    },
}
</script>

<style scoped>
    .blade-item{
        font-weight: normal;
        display: none;
        cursor: pointer;
        line-height: 36px;
        color: rgb(70, 70, 70);
    }
    .blade-item:hover{
        color: rgb(0, 0, 0);
    }
    .active{
        display: block;
    }
</style>