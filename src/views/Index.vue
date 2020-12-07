<!--
 * @Descripttion:
 * @Author: chenxch
 * @Date: 2020-12-06 22:19:06
-->
<template>
  <div class="full main__img">
    <div class="main__view">
      <div class="main__menu">
        <div class="main__title">
          <img src="../assets/flower.png" class="main__icon"/>
          <span class="ml10">Xc Official</span>
        </div>
        <el-menu
          default-active="/about"
          class="main__menu__body mt10"
          router
          @select="handleSelect"
        >
          <el-menu-item v-for="obj in menuObj" :index="obj.path" :class="active === obj.path ? 'main__menu__active':''" :key="obj.path">
            <i class="el-icon-magic-stick"></i>
            <template v-slot:title>
              <span>{{obj.name}}</span>
            </template>
          </el-menu-item>

        </el-menu>
      </div>
      <div class="main__router">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
  export default {
    setup(){
      const menuObj = reactive([]);
      const active = ref('/about');
      menuObj.push({ path: '/about', name: '关于我'});
      menuObj.push({ path: '/test', name: '测试'});
      const handleSelect = (index) => {
        active.value = index;
      }
      return { menuObj, active, handleSelect }
    }
  }
</script>
<style lang="scss" scoped>
.full {
  width: 100%;
  height: 100%;
}
.main {
  &__img {
    background-image: url('../assets/vue1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 50px;
  }
  &__view {
    // border: 1px solid;
    border-radius: 20px;
    height: 100%;
    display: flex;
    background-color: rgba(255,255,255,.94);
  }
  &__menu {
    border-right: 1px solid #e0e0e0;
    width: 270px;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    &__body {
      flex: 1;
    }
    &__active {
      color: #47e;
      >i{
        color: #47e;
      }
    }
  }
  &__router {
    flex: 1;
    height: 100%;
    padding: 20px 0;
  }
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__title {
    padding: 0 20px;
    line-height: 24px;
    display: flex;
  }
}
:deep(.el-menu) {
  border-right: 0;
  background-color: transparent;
}

</style>
