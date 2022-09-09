<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/logo/1.png"
      class="logo"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<style>
  .logo{
    border-radius: 50%;
  }
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
