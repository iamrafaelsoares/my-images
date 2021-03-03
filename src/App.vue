<template>
  <div>
    <app-header />
    <div class="ui container">
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