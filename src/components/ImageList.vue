<template>
  <div>
    <vs-row v-if="isLoggedIn" justify="center">
        <vs-card v-for="image in allImages" :key="image.id" type="5" class="m-3">
          <template #title>
            <h3>{{image.filename}}</h3>
          </template>
          <template #img>
            <img :src="image.baseUrl" alt="image">
          </template>
          <template #text>
            <div>
              {{image.description}}
            </div>
            <div>
              {{image.mediaMetadata.creationTime | dateFormated}}
            </div>
          </template>
        </vs-card>
    </vs-row>
    <vs-row v-else justify="center">
      <h2>Log in to get started!!</h2>
    </vs-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages','isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
  filters: {
    dateFormated(dt) {
      return new Date(dt).toLocaleDateString();
    }
  }
}
</script>
<style scoped>
.m-3 {
  margin: 8px;
}
</style>