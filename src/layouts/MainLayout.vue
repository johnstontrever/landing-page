<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/logos/2.png" class="logo">
          </q-avatar>
          Wash.Cars
        </q-toolbar-title>
        <q-tabs align="right">
        <q-route-tab to="/#about" label="About" />
        <q-route-tab to="/#faq" label="FAQ" />
        <q-route-tab to="/#contact" label="Contact" />
      </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/logos/2.png" class="logo">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      essentialLinks: "Wash.Cars"
    }
  }
})
</script>

<style>

</style>
