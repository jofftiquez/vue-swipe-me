<template>
  <div class="swipe-me-swipe-container">
    <h1>{{item}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
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