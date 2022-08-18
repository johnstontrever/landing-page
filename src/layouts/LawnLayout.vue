<template>
  <q-layout view="lHh Lpr fff" class="background">
    <q-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
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

    <!-- Mobile Tabs -->
    <!-- <q-layout-drawer v-model="leftDrawerOpen" class="mobile-only">
      <q-list no-border link inset-delimiter v-for="tab in tabs">
        <q-item @click.native="push(tab)">
          <q-item-side icon="" />
          <q-item-main :label="tab.name" />
        </q-item>
      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal>
      <q-toolbar color="secondary">
        <q-toolbar-title class="row justify-center">
          <div class="col-md-2 q-mt-xs self-center">

            &copy;2022 Wash.Cars
          </div>
          <div class="col-md-8"></div>
          <div class="col-md-2 self-center float-right">
            <q-btn flat @click="launch('https://www.facebook.com/')">
              <q-icon size="2rem" name="fab fa-facebook-square" />
            </q-btn>
            <q-btn flat @click="launch('https://www.twitter.com/')">
              <q-icon size="2rem" name="fab fa-twitter-square" />
            </q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LawnLayout',
  setup() {
    return {
      leftDrawerOpen: false,
      tabs() {
        return [
          {
            name: "Home",
            link: "/"
          },
          {
            name: "About",
            link: "/"
          },
          {
            name: "Our Services",
            link: "/"
          },
          {
            name: "Resources",
            link: "/"
          },
          {
            name: "Quote",
            link: "/"
          },
          {
            name: "Why us?",
            link: "/"
          },
          {
            name: "Contact",
            link: "/"
          },
        ]
      },
    }
  },
  methods: {
    openURL,
    push(tab) {
      this.$router.push(tab.link)
    },
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
})
</script>

<style>
.background {
  /* background: url(../assets/background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden; */
  background-color: white;
}

.second-background {
  /* background-color: rgba(17, 17, 17, 0.75); */
  /* padding: 1rem; */
  background: url(../assets/car3.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}

.set-size-outer {
  max-width: 65vh;
}

.white-text {
  color: white;
}

.black-text {
  color: black;
}

.grow {
  transition: all .35s ease-in-out;
  margin-bottom: 2rem;
}

.grow:hover {
  transform: scale(1.05);
}
</style>
