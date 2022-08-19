<template>
  <q-page class="flex bg-img">
    <div class="">
      <!-- <div class="row">
        <div class="col">
          <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px">
        </div>
      </div> -->
      <div class="row">
        <div class="col-12">
          <q-img :src=header alt="Header image" class="bg-header responsive">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <h2 class="text-white">Wash more Cars.</h2>
            </div>
          </q-img>
        </div>
      </div>

      <div class="dark-bg q-pt-xl q-pb-lg">
        <div class="row justify-center">
          <!-- CARDS -->
          <div class="col-12">
            <div class="row q-gutter-lg justify-center">
              <div class="col-3">
                <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Improve Your Operations</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3">
                <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Improve Your Operations</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3">
                <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Improve Your Operations</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <!-- ABOUT -->
          <div id="about" class="col-9">
            <div class="row justify-center">
              <div class="col-10 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-10 text-white">
                <h3>About</h3>
              </div>

              <div class="col-10 text-white">
                <p class="text-body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Amet nulla facilisi morbi
                  tempus iaculis. Arcu vitae elementum curabitur vitae. Dolor purus non enim praesent elementum
                  facilisis
                  leo vel. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Vitae turpis massa sed
                  elementum tempus egestas sed sed risus. Sit amet venenatis urna cursus. Neque gravida in fermentum et
                  sollicitudin. Sed blandit libero volutpat sed cras. Integer vitae justo eget magna fermentum iaculis
                  eu
                  non. Nunc eget lorem dolor sed viverra. Aenean et tortor at risus. Magna etiam tempor orci eu
                  lobortis.
                  Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div id="faq" class="col-9">
            <div class="row justify-center">
              <div class="col-10 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-10 text-white">
                <h3>FAQ</h3>
              </div>

              <div class="col-10 text-white">
                <p class="text-body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Amet nulla facilisi morbi
                  tempus iaculis.
                </p>
                <p class="text-body1">
                  Arcu vitae elementum curabitur vitae. Dolor purus non enim praesent elementum facilisis
                  leo vel. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Vitae turpis massa sed
                  elementum tempus egestas sed sed risus.
                </p>
                <p class="text-body1">
                  Sit amet venenatis urna cursus. Neque gravida in fermentum et
                  sollicitudin. Sed blandit libero volutpat sed cras. Integer vitae justo eget magna fermentum iaculis
                  eu
                  non. Nunc eget lorem dolor sed viverra.
                </p>
                <p class="text-body1">
                  Aenean et tortor at risus. Magna etiam tempor orci eu lobortis.
                  Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
                </p>
              </div>
            </div>
          </div>

          <!-- CONTACT -->
          <div id="contact" class="col-12 q-pb-xl">
            <div class="row justify-center dark">
              <div class="col-10 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-7">
                <h3 class="text-white">Get in touch</h3>
              </div>
              <div class="col-7 light-bg q-pa-xl shadow-12">
                <div class="row">
                  <div class="col-12">
                    <q-input v-model="name" label="Name" dark/>
                  </div>
                  <div class="col-12">
                    <q-input v-model="email" label="Email" dark/>
                  </div>
                  <div class="col-12">
                    <q-input v-model="phone" label="Phone" dark/>
                  </div>
                  <div class="col-12">
                    <q-input v-model="text" type="textarea" label="Let us know your thoughts or questions!" dark/>
                  </div>
                </div>
                <div class="row q-mt-md">
                  <div class="col-12">
                    <q-btn color="secondary">Send</q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">

        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      header: 'car2.jpeg',
      name:'',
      email:'',
      phone:'',
      text:''
    }
  }
})
</script>
