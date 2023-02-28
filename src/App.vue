<script setup>
import 'bootstrap'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container main__body">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = to.meta.title + ' - DATFLIX' || 'DATFLIX - Xem phim online miễn phí'
      }
    }
  }
}
</script>
<style scoped>

</style>
