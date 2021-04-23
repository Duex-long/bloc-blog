<template>
    <div class="sidebar-fixed">
        <div class="sidebar">
      <div class="sidebar-input">
          <input placeholder="Search.." type="text" name="" id="">
      </div>
      <div class="sidebar-collapse">
           <blade  v-for="item in sideList" :key="item.id" :childList="item.children" :currentIndex="item.id" :toPath="item.route" > 
             <template #slotTitle>
                 {{item.title}}
            </template> 
            </blade>
      </div>
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
    .sidebar-fixed{
        height: 100%;
        min-width: 250px;
    }
    .sidebar{
        min-width: 250px;
        height: 100%;
        padding: 0PX;
        border-right: 1px solid rgb(224, 223, 223);
        position: fixed;

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
        box-shadow: 0 0 10px #4fc08d;
        transition: all .5s ease ;
    }
    .sidebar-collapse{
        padding-top:20px;
        /* position: sticky; */
        
    }
    
    
</style>