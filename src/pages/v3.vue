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
              <div class="row text-center">
                <div class="col-12 text-center">
                  <span class="text-white text-bold text-h2">Wash.Cars</span>

                </div>
                <div class="col-12 text-center">
                  <span class="text-h4 text-white text-bold">Take your car wash to the next level.</span>

                </div>
                <div class="col-12 text-center q-mt-xl">
                  <q-btn color="primary" size="xl" no-caps>Schedule a demo!</q-btn>
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </div>


      <div class="dark-bg q-pt-xl q-pb-lg">
        <div class="row justify-center">
          <!-- CALLOUT -->
          <div id="callout" class="col-9">
            <div class="row justify-center">
              <div class="col-10 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-10 text-white">
                <h2 class="text-bold">What is Wash.Cars?</h2>
              </div>

              <div class="col-10 text-white">
                <p class="text-h5">
                  Wash.Cars is the go-to when it comes to innovative software that helps your company to wash more cars.
                  Wash.Cars aims to take all of the manual, ineffective, and inefficient tasks of a car wash and turn
                  them into simple procedures that all
                  exist in the same place.
                </p>
              </div>
              <div class="col-10 q-mt-xl q-mb-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
            </div>
          </div>

          <!-- CARDS -->
          <div class="col-12 bg-white">
            <!-- <div class="row q-gutter-lg justify-center">
              <div class="col-8 text-white">
                <h2 class="text-bold">Top Features</h2>
              </div>
            </div> -->
            <div class="row q-gutter-lg justify-center q-mt-xl q-mb-xl">
              <q-card v-for="service in services" flat class="col-xs-12 col-md-3 my-card ">
                <q-card-section class="text-center">
                  <q-avatar size="6rem">
                    <img :src="service.link">
                  </q-avatar>
                </q-card-section>
                <q-card-section class="text-center">
                  <div class="text-h4 text-dark text-bolder">{{ service.title }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section class="q-pt-md text-body1 text-dark text-center">
                  {{ service.description }}
                </q-card-section>

              </q-card>
            </div>
            <div class="row justify-center q-mt-xl q-mb-xl">
              <div class="col-12 text-center">
                <q-btn no-caps color="secondary" size="xl">Full Feature List</q-btn>
              </div>
            </div>
          </div>

          <!-- ABOUT -->
          <div id="about" class="col-9 q-mt-xl q-mb-xl">
            <div class="row justify-center">

              <div class="col-10 text-white">
                <h2 class="text-bold">About</h2>
              </div>
              <div class="col-10 q-mb-md">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-10 text-white">
                <p class="text-h5">
                  Wash.Cars was created out of necessity. The car wash industry is often stuck in the dark ages
                  technologically and Wash.Cars is on a mission to
                  bring updated software and processes to areas paper forms and spreadsheets should have long been
                  replaced.
                </p>
              </div>
              <div class="col-10 q-mb-md">
                <q-separator size=".2rem" spaced dark />
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <!-- <div id="faq" class="col-9">
            <div class="row justify-center">
              <div class="col-10 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-10 text-white">
                <h2 class="text-bold">FAQ</h2>
              </div>

              <div class="col-10 text-white">
                <p class="text-h5 text-bold">
                  How will Wash.Cars help me wash more cars?
                  <p class="text-h6 q-mt-md">
                  Wash.Cars takes the processes which are prone to error, non-standardization, and tend to take a large amount of time and streamlines them into one location.
                  This streamlining of processes helps to give employees more time to focus on the most important tasks. Additionally, Wash.Cars collects relevant data
                   and information about car wash operations, granting operators deeper insight into various areas of improvement.
                </p>
                <hr>
                </p>

                <p class="text-h5 text-bold">
                  How many locations does Wash.Cars support?
                  <p class="text-h6 q-mt-md">
                  Wash.Cars can support as many locations as you have.
                </p><hr>
                </p>

                <p class="text-h5 text-bold">
                  Do I have to have all locations set up in Wash.Cars?
                  <p class="text-h6 q-mt-md">
                  No, you can have as many or as few car wash locations as you want in Wash.Cars.
                </p>
                <hr>
                </p>

                <p class="text-h5 text-bold">
                  How long does it take to get set up?
                  <p class="text-h6 q-mt-md">
                    Our goal is to onboard new customers within 30 days max, although that number is often much less.
                </p>
                <hr>
                </p>

                <p class="text-h5 text-bold">
                  Can we self-host?
                  <p class="text-h6 q-mt-md">
                    If customers would like to self-host, we would be happy to provide a list of necessary steps and work with your teams to run your own self-contained copy of our web application.                </p>
                <hr>
                </p>

              </div>
            </div>
          </div> -->

        </div>

        <div class="row justify-around bg-white">
          <!-- CONTACT -->
          <div id="contact" class="col-12 col-md-5 q-pb-xl">
            <div class="row justify-center dark">
              <div class="col-12 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-12">
                <h2 class="text-dark text-bold">Get in touch</h2>
              </div>
              <div class="col-12 bg-accent q-pa-xl shadow-12">
                <form ref="form">

                  <div class="row">
                    <div class="col-12">
                      <q-input v-model="name" name="name" id="name" label="Name" dark />
                    </div>
                    <div class="col-12">
                      <q-input v-model="email" name="email" id="email" label="Email" dark />
                    </div>
                    <div class="col-12">
                      <q-input v-model="phone" name="phone" id="phone" label="Phone" dark />
                    </div>
                    <div class="col-12">
                      <q-input v-model="text" name="text" id="text" type="textarea"
                        label="Get in touch to schedule a demo or find out more information!" dark />
                    </div>
                  </div>
                  <div class="row q-mt-md">
                    <div class="col-12">
                      <q-btn color="secondary" type="submit" @click.prevent="sendEmail()">Send</q-btn>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <!-- FEATURES -->
          <div id="features" class="col-9 col-md-3 q-pb-xl">
            <div class="row justify-center">

              <div class="col-12 q-mt-xl">
                <q-separator size=".2rem" spaced dark />
              </div>
              <div class="col-12 text-dark">
                <h2 class="text-bold">Feature List</h2>
              </div>

              <div class="col-12 text-white bg-secondary q-pt-xl q-pb-xl q-pl-xl q-pr-xl big-rounded">
                <q-list dense padding class="rounded-borders text-center">
                  <q-item v-for="item in items">
                    <q-item-section>
                      <span class="text-h5">
                        {{item}}
                      </span>
                      <q-separator size=".1rem" spaced dark />

                    </q-item-section>
                  </q-item>
                </q-list>
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
import emailjs from '@emailjs/browser';
import { useQuasar } from 'quasar'

export default defineComponent({

  name: 'Home',
  setup() {
    const $q = useQuasar()

    return {
      header: 'car2.jpeg',
      name: ref(''),
      email: ref(''),
      phone: ref(''),
      text: ref(''),
      expanded: false,
      items: [
        "Incident Tracking",
        "Employee Rewards",
        "Chemical Tracking",
        "Company Announcements",
        "Employee Apparel Ordering",
        "Resource Hub",
        "DRB Integration",
        "Data Reporting",
        "Checklists",
        "...And More!"
      ],
      services: [
        {
          title: "Incident Tracking",
          description: "Never forget about an incident again. Be prepared for handling and tracking incidents, from first report until the incident is resolved. Wash.Cars streamlines all of these processes and more.",
          link: "cracked.png"
        },
        {
          title: "Employee Rewards",
          description: "Looking for a way to let your employees know they went above and beyond? Wash.Cars employee rewards module gives employees another reason to give their all each day on the job.",
          link: "medal.png"
        },

        // {
        //   title: "Company Announcements",
        //   description: "Fooled again thinking the dog likes me sleep on dog bed, force dog to sleep on floor a nice warm laptop for me to sit on hey! you there, with the hands, i show my fluffy belly but it's a trap! if you pet it i will tear up your hand kitty loves pigs, human is washing you why halp oh the horror flee scratch hiss bite. ",
        //   link: "ann.png"
        // },
        // {
        //   title: "Employee Apparel Ordering",
        //   description: "Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i like big cats and i can not lie or flop over my cat stared at me he was sipping his tea, too, stick butt in face leave fur on owners clothes.",
        //   link: "app.png"
        // },
        {
          title: "Chemical Tracking",
          description: "Chemical tracking doesn't have to be tedious or difficult. With the Wash.Cars Chemical Tracking module, you'll be able to keep track of your chemical usage with ease and glean invaluable data.",
          link: "chem.png"
        },
        // {
        //   title: "Resource Hub",
        //   description: "Meow meow, i tell my human i is not fat, i is fluffy. Get scared by doggo also cucumerro cat cat moo moo lick ears lick paws yet sit on human they not getting up ever knock over christmas tree. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark sit in box.",
        //   link: "docs.png"
        // },
      ],
      showSuccess () {
        $q.notify({
          message: 'Successfully Sent!',
          color: 'positive'
        })
      },
      showFail () {
        $q.notify({
          message: 'Could not send, please try again!',
          color: 'negative'
        })
      }
    }
  },
  methods: {
    sendEmail() {
      console.log('refs', this.$refs.form)
      emailjs.sendForm('service_couma57', 'template_pecm3wh', this.$refs.form, 'ozgq75zCBbhpcno6R')
        .then((result) => {
          this.showSuccess()

          console.log('SUCCESS!', result.text);
        }, (error) => {

          this.showFail()
          console.log('FAILED...', error.text);
        });
    },

  }
})
</script>
