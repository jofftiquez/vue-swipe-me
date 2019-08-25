<template>
  <div class="swipe-me-swipe-container">
    <template v-for="(item) in items">
      <swiper-item :item="item"></swiper-item>
    </template>
  </div>
</template>

<script>
import SwiperItem from './SwiperItem.vue';
export default {
  props: {
    items: {
      type: Array
    }
  },
  components: {
    SwiperItem
  }
}
</script>

<style scoped>
h1 {
  color: red;
}

.swipe-me-swipe-container {
  min-height: 300px;
  min-width: 500px;
  background-color: red;
}
</style>