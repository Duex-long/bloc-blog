<template>
  <div class="sidebar">
      <div class="sidebar-input">
          <input placeholder="Search.." type="text" name="" id="">
      </div>
      <div class="sidebar-collapse">
          <!-- <ul @click="openLi" class="collapse-ul" v-for="(item,index) in sideList" :key="item.index" >
              <span><router-link to="/text" > {{item.title}} </router-link></span>
             
          </ul> -->
           <blade  v-for="(item,index) in sideList" :key="item.index" :childList="item.children" :currentIndex="item.index" > 
             <template #slotTitle>
                 <router-link :to="item.route">{{item.title}}</router-link>
            </template> 
            </blade>
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
        msg(e){
            console.log(e.target)
        }
        
    },
    mounted() {
        this.getSideList()
        // this.isOpen = true
    },
}
</script>

<style>
    .sidebar{
        min-width: 250px;
        height: 100%;
        padding: 0PX;
        border-right: 1px solid rgb(224, 223, 223);

    }
    .sidebar-input{
        padding: 6px 6px 6px 6px;
        border-bottom: 1px solid rgb(240, 239, 239);
        /* border-right: 1px solid #ccc; */
    }
    .sidebar-input input{
        text-indent: 1em;
        margin-top:6px ;
        margin-bottom: 6px;
        /* line-height: 35px; */
        height: 35px;
        border-radius: 5px;
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
    }
    
    
</style>