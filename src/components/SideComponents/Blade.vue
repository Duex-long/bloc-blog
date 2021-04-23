<template>
    <div class="blade">
        <!-- #通过slot控制下面blade—item的display -->
        <div class="blade-slot" @click="switchOn">
            <slot  name="slotTitle"> Default Solt </slot>
            <i v-if="!trunOver" class="bi bi-caret-left"></i>
            <i v-else class="bi bi-caret-down"></i>
        </div>
        
        <blade-item v-for="(li,index) in childList" :key="li.index" :isOpen="trunOver" >
            <template #bladeItem>
                <div>{{li.title}}</div>                 
            </template>
        </blade-item>
    </div>
</template>

<script>
import BladeItem from './Blade-Item.vue'
export default {
  components: { BladeItem },
    data(){
        return{
            // 控制子元素展开
            trunOver:false
        }
    },
    props:{
        childList:{
            // type:Array,
            default:''
        },
        currentIndex:{
           type:Number,
            
        }
    },

    methods:{
        switchOn(){
            this.trunOver = !this.trunOver
        },
    },
    mounted(){
        console.log(this.currentIndex)
    }
}
</script>

<style scoped>
    .blade{
        margin-left:40px;
        text-align: left;  
        margin-bottom:10px;
        
    }
    .blade-slot a{
        text-decoration: none;
        color: unset;
    }
    .blade-slot{
        display: block;
        cursor: pointer;
        font-weight:bold;
        line-height: 36px;
    }
     .blade-slot i {
         margin-left:5px;
         /* color: #fff; */
         /* font-size: 16px; */
         border: 1px solid #ccc;
         border-radius: 3px;
         /* background: #4fc08d; */
     }
     /* .active{
         transform: rotate(90deg);
     } */
     /* .active{
         background: #000;
     } */
</style>