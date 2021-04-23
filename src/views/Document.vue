<template>
    <div class="document">
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import SideBar from '../components/NavMenu/SideBar.vue'
export default {
  components: { SideBar },

}
</script>

<style scoped>
    .document{
        display: flex;
        flex-direction: row;
        height: 100%;
    }
</style>