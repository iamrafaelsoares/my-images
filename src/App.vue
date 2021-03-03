<template>
  <div>
    <div class="navbar-wrapper">
      <app-header />
    </div>
    <div class="main-content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: { AppHeader },
  name: 'App'
}
</script>
<style>
body {
  background: #F8F8F8;
}

.main-content-wrapper {
  margin-top: 65px;
}
</style>