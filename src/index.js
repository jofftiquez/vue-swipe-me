import SwipeMeSwiper from './components/Swiper.vue';
import SwipeMeSwiperItem from './components/SwiperItem.vue';

const VueSwipeMe = {
  install (Vue, options) {
    Vue.component('swipe-me-swiper', SwipeMeSwiper);
    Vue.component('swipe-me-swiper-item', SwipeMeSwiperItem);
  }
}

export default VueSwipeMe;
export { SwipeMeSwiper, SwipeMeSwiperItem };