<template>
  <div class="sidebar">
      <div class="sidebar-input">
          <input placeholder="Search.." type="text" name="" id="">
      </div>
      <div class="sidebar-collapse">
          <ul @click="openLi" class="collapse-ul" v-for="(item,index) in sideList" :key="item.index" >
              <span><router-link to="/text" > {{item.title}} </router-link></span>
              <li  id="string" :class="{active:isOpen}" v-for="(li,index) in item.children" :key="li.index">
                  <router-link :to="li.title"> {{li.title}} </router-link>
              </li>
              <blade></blade>
              <!-- <li v-for="(li,index) in childrenList" :key="li.title"></li> -->
          </ul>
      </div>
  </div>
</template>

<script>
import Blade from '../SideComponents/Blade.vue'
export default {
  components: { Blade },
    name:'SideBar',
    data(){
        return{
            sideList : [],
            isOpen:true
        }
    },
    methods: {
        async getSideList(){
            await this.$http.get('/list').then(res=>{
                if(res.status == 200){
                    this.sideList = res.data
                    console.log(this.sideList)
                }
            })
        },
        openLi(e){
            this.isOpen = !this.isOpen
            console.log(this.isOpen, e.currentTarget)
        }
    },
    mounted() {
        this.getSideList()
    },
}
</script>

<style>
    .sidebar{
        min-width: 250px;
        padding: 0px 10px 0px 0px;
    }
    .sidebar-input{
        padding: 10px 10px 10px 20px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .sidebar-input input{
        text-indent: 1em;
        margin-bottom: 10px;
        margin-right:10px ;
        line-height: 35px;
        border-radius: 3px;
        border:1px solid rgb(214, 214, 214);
        transition: all .5s ease ;
    }
    .sidebar-input input:focus{
        outline: none;
        /* box-shadow: 2px 2px 2px #4fc08d; */
        border:1px solid #4fc08d;
        box-shadow: 0 0 5px #4fc08d;
        transition: all .5s ease ;
    }
    .sidebar-collapse{
        padding-top:20px ;
        border-right: 1px solid #ccc;
    }
    .collapse-ul{
        margin-left: 20px;
        list-style: none;
        text-align: left;
        /* height: 36px; */
        /* overflow: hidden; */
        
        /* line-height: 20px; */
    }
    .collapse-ul span{
        font-size: 18px;
        line-height: 36px;
        font-weight: bold;
        cursor: pointer;
    }
    .collapse-ul span a{
        text-decoration: none;
        color: rgb(29, 28, 28);
    }
    
    .collapse-ul li{
        color: rgb(70, 70, 70);
        line-height: 36px;
        cursor: pointer;
        /* height: 36px; */
    }
    .collapse-ul li a:hover{
        color: #000;
    }
    .collapse-ul li a{
        text-decoration: none;
        color: rgb(70, 70, 70);
    }

    .active{
        display: none;
    }
</style>