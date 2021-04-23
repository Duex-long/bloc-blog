<template>
    <div class="blade">
        <!-- #通过slot控制下面blade—item的display -->
        <div class="blade-slot" @click="switchOn">
            <router-link :to="this.newPath">   
                <slot  name="slotTitle"> Default Solt </slot>
                <i v-if="!trunOver" class="bi bi-caret-left"></i>
                <i v-else class="bi bi-caret-down"></i>
            </router-link>
        </div>
        
        <blade-item v-for="li in childList" :key="li.cid" :isOpen="trunOver" 
            :childToPath="li.route"
        >
            <template #bladeItem>
                <div>{{li.title}}</div>                 
            </template>
        </blade-item>
    </div>
</template>

<script>
import BladeItem from './Blade-Item.vue'
import {mapState, mapMutations} from 'vuex'
export default {
  components: { BladeItem },
    data(){
        return{
            trunOver:false ,//控制控件展开
            newPath:''
        }
    },
    props:{
        childList:{
            default:''
        },
        currentIndex:{
           type:String,
        },
        toPath:{
            required:true,
            // type:String
        }
    },
    methods:{
        ...mapMutations(['currentChange']),
        switchOn(){
            this.trunOver = true
            this.currentChange(this.currentIndex)
        },
        updatePath(){
            this.newPath = "/document" + this.toPath
        }
    },
    mounted(){
        console.log(this.currentIndex,this.current)
        if(this.currentIndex == this.current){
            this.trunOver = true
        }
        this.updatePath()
    },  
    computed:{
        ...mapState(['current']),
    },
    watch:{
        current:function(){
            // 箭头函数无法获取this 
            if(this.currentIndex !== this.current){
            this.trunOver = false
            }
        }
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
        display: block;
        /* width: 200px; */
        /* display: inline-block; */
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