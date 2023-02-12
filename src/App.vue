<script setup>
import 'bootstrap'
import Header from './components/Header.vue'
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
</template>

<style scoped>

</style>
