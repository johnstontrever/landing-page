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
              <q-card v-for="service in services" class="col-xs-10 col-md-3 card grow not-loaded"
                v-scroll-fire="fadeInImage">
                <q-img :src="service.link" style="height:100%; max-height: 35vh;">
                  <div @click="setSelectedService(service)" class="row justify-center text-center grow card-overlay">
                    <div class="col-xs-12 text-center">
                      <span class="text-h5 text-center">
                        {{ service.title }}
                      </span>
                    </div>
                    <div class="col-xs-12 q-mt-xl">
                      <q-btn outline class="hidden-text text-white">More Info</q-btn>
                    </div>
                  </div>
                </q-img>
              </q-card>
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
                    <q-input v-model="name" label="Name" dark />
                  </div>
                  <div class="col-12">
                    <q-input v-model="email" label="Email" dark />
                  </div>
                  <div class="col-12">
                    <q-input v-model="phone" label="Phone" dark />
                  </div>
                  <div class="col-12">
                    <q-input v-model="text" type="textarea" label="Let us know your thoughts or questions!" dark />
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
      header: './src/assets/car2.jpeg',
      name:'',
      email:'',
      phone:'',
      text:'',
      services: [
        {
          title: "Employee Rewards",
          description: "Cat ipsum dolor sit amet, fight an alligator and win and cuddle no cuddle cuddle love scratch scratch. Chase mice nap all day. Love me! x so stand in front of the computer screen, yet thug cat . My water bowl is clean and freshly replenished, so i'll drink from the toilet",
          link: "./src/assets/reward.png"
        },
        {
          title: "Incident Tracking",
          description: "prepare to pounce eat too much then proceed to regurgitate all over living room carpet while humans eat dinner. Lie in the sink all day lick the plastic bag so hiss and stare at nothing then run suddenly away and attack like a vicious monster.",
          link: "./src/assets/incident.png"
        },
        {
          title: "Company Announcements",
          description: "Fooled again thinking the dog likes me sleep on dog bed, force dog to sleep on floor a nice warm laptop for me to sit on hey! you there, with the hands, i show my fluffy belly but it's a trap! if you pet it i will tear up your hand kitty loves pigs, human is washing you why halp oh the horror flee scratch hiss bite. ",
          link: "./src/assets/ann.png"
        },
        {
          title: "Employee Apparel Ordering",
          description: "Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i like big cats and i can not lie or flop over my cat stared at me he was sipping his tea, too, stick butt in face leave fur on owners clothes.",
          link: "./src/assets/app.png"
        },
        {
          title: "Chemical Tracking",
          description: "Cat ipsum dolor sit amet, meowing non stop for food thug cat , for a nice warm laptop for me to sit on mark territory. Catasstrophe sniff catnip and act crazy. Disappear for four days and return home with an expensive injury",
          link: "./src/assets/chem.png"
        },
        {
          title: "Resource Hub",
          description: "Meow meow, i tell my human i is not fat, i is fluffy. Get scared by doggo also cucumerro cat cat moo moo lick ears lick paws yet sit on human they not getting up ever knock over christmas tree. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark sit in box.",
          link: "./src/assets/docs.png"
        },
      ],
    }
  }
})
</script>
