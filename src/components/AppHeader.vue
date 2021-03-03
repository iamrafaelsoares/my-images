<template>
  <div>
    <vs-navbar center-collapsed>
      <template #left>
        <router-link to="/" custom v-slot="{ navigate }">
          <span @click="navigate" role="link">
            <h3>My Images</h3>
          </span>
        </router-link>
      </template>
      <vs-navbar-item>
        Image Storage
      </vs-navbar-item>
      <template #right>
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/" custom v-slot="{ navigate }">
            <vs-button @click="navigate" role="link">
              Galleries
            </vs-button>
          </router-link>
          <router-link to="/upload" custom v-slot="{ navigate }">
            <vs-button @click="navigate" role="link">
              Upload
            </vs-button>
          </router-link>
          <vs-button flat @click="logout">Logout</vs-button>
        </div>
        <vs-button v-else flat @click="login">Login</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AppHeader",
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login','logout']),
};
</script>
<style scoped>
.horizontal {
  display : flex;
  flex-direction : row;
}
</style>