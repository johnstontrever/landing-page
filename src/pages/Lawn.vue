<template>
  <q-page>
    <div class="row justify-center second-background" style="min-height:30vh;">
      <!-- <div class="col-xs-3"></div> -->
      <div class="col-xs-12 col-md-12 desktop-only">
        <q-img class="see-through" style="min-height:30vh;">
          <div class="row justify-center" style="height:100%;">
            <div class="col-8">
              <div class="">
                <h1 class="text-weight-bolder">Wash.Cars</h1>
                <div class="text-h4 text-weight-bold">
                  Let us help you wash more cars.
                </div>
                <hr class="q-hr q-my-lg">
                <div class="text-subtitle1 q-mb-md text-weight-bold">This is the section where we would put a short blip
                  about your
                  company. Something
                  not too long, and not too short. This section should have enough information to grab attention, but
                  not
                  overwhelm potential customers.</div>
                <q-btn color="secondary" no-caps class="q-py-sm q-px-xl text-weight-light" label="Learn more" />
              </div>
            </div>
          </div>
        </q-img>
      </div>
      <div class="spacer col-xs-12 mobile-only white-text see-through-dark">
        <div class="row justify-center full">
          <h2 class="col-xs-12 text-weight-bold mobile-only text-center">Wash.Cars</h2>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-xs-12 text-center">
        <h2 class="header text-weight-bolder">Our Services</h2>
      </div>
      <q-card v-for="service in services" class="col-xs-10 col-md-3 card grow not-loaded" v-scroll-fire="fadeInImage">
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
    <div class="row justify-center bg-secondary q-mt-xl">
      <div class="col-12">
        <div class="row justify-center not-loaded" v-scroll-fire="fadeInImage">
          <div class="col-7">
            <h2 class="header text-weight-bolder text-white">About Us</h2>
          </div>
          <div class="col-7 q-mb-xl">
            <div class="text-body1 text-white">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div class="col-12">
        <div class="row justify-center not-loaded" v-scroll-fire="fadeInImage">
          <div class="col-7">
            <h2 class="header text-weight-bolder">FAQ</h2>
          </div>
          <div class="col-7 q-mb-xl">
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
    </div>

    <div class="row justify-center top-spacer bg-secondary">
      <div class="col-xs-8 q-mb-xl">
        <h2 class="header text-weight-bolder text-white">Contact Us</h2>
        <hr class="q-my-lg white-hr" align="left">
        <div class="self-center not-loaded" v-scroll-fire="fadeInImage">
          <q-input v-model="name" label="Name" name="Name" type="text" color="white" label-color="white" />
          <q-input v-model="email" label="Email" name="Email" type="email" color="white" label-color="white"/>
          <q-input v-model="phone" label="Phone" name="Phone" type="tel" color="white" label-color="white"/>
          <q-input v-model="subject" label="Subject" name="Subject" type="text" color="white" label-color="white"/>
          <q-input v-model="message" type="textarea" name="Message" label="Message" :max-height="100" rows="5" color="white" label-color="white"/>
          <form action="//formspree.io/trever@ebenezerwebsites.com" method="POST">
            <q-btn type="submit" outline color="white" class="q-mt-sm">Send</q-btn>
            <div class="hidden">
              <input type="text" name="name" v-model="name">
              <input type="email" name="_replyto" v-model="email">
              <input type="tel" name="phone" v-model="phone">
              <input type="text" name="subject" v-model="subject">
              <input type="textarea" name="message" v-model="message">
            </div>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
.modal-img {
  max-height: 45vh;
  /* max-width: 50vw; */
}

.full {
  height: 25vh;
  padding-top: 5vh;
}

.spacer {
  margin: 1rem;
  padding: 1rem;
}

.hidden-text {
  opacity: 0;
  transition: all 0.55s ease-in-out;
}

.black-back {
  background-color: black;
}

.top-spacer {
  margin-top: 5rem;
}

.card {
  margin: 1rem;
  /* max-height: 15rem; */
}

.green {
  height: 50px;
  background-color: rgb(0, 97, 0);
}

.see-through {
  background-color: rgba(255, 255, 255, 0.363);
}

.see-through-dark {
  background-color: rgba(0, 0, 0, 0.425);
  margin: 0 5rem 0 5rem;
}

.white-border {
  border-color: white;
}

.header {
  color: gray;
}

.not-loaded {
  opacity: 0;

  -webkit-transition: opacity 2s ease-in;
  -moz-transition: opacity 2s ease-in;
  -ms-transition: opacity 2s ease-in;
  -o-transition: opacity 2s ease-in;
  transition: opacity 2s ease-in;
}

.loaded {
  opacity: 1;
}

</style>

<script>
export default {
  name: 'Home',
  setup() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      modal: false,
      selectedService: {},
      companyName: "Wash.Cars",
      services: [
        {
          title: "Employee Rewards",
          description: "Cat ipsum dolor sit amet, fight an alligator and win and cuddle no cuddle cuddle love scratch scratch. Chase mice nap all day. Love me! x so stand in front of the computer screen, yet thug cat . My water bowl is clean and freshly replenished, so i'll drink from the toilet",
          link: "reward.png"
        },
        {
          title: "Incident Tracking",
          description: "prepare to pounce eat too much then proceed to regurgitate all over living room carpet while humans eat dinner. Lie in the sink all day lick the plastic bag so hiss and stare at nothing then run suddenly away and attack like a vicious monster.",
          link: "incident.png"
        },
        {
          title: "Company Announcements",
          description: "Fooled again thinking the dog likes me sleep on dog bed, force dog to sleep on floor a nice warm laptop for me to sit on hey! you there, with the hands, i show my fluffy belly but it's a trap! if you pet it i will tear up your hand kitty loves pigs, human is washing you why halp oh the horror flee scratch hiss bite. ",
          link: "ann.png"
        },
        {
          title: "Employee Apparel Ordering",
          description: "Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again i like big cats and i can not lie or flop over my cat stared at me he was sipping his tea, too, stick butt in face leave fur on owners clothes.",
          link: "app.png"
        },
        {
          title: "Chemical Tracking",
          description: "Cat ipsum dolor sit amet, meowing non stop for food thug cat , for a nice warm laptop for me to sit on mark territory. Catasstrophe sniff catnip and act crazy. Disappear for four days and return home with an expensive injury",
          link: "chem.png"
        },
        {
          title: "Resource Hub",
          description: "Meow meow, i tell my human i is not fat, i is fluffy. Get scared by doggo also cucumerro cat cat moo moo lick ears lick paws yet sit on human they not getting up ever knock over christmas tree. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark sit in box.",
          link: "docs.png"
        },
      ],
      projects: [],
    }
  },
  methods: {
    fadeInImage(element) {
      element.classList.add('loaded')
    }
  }
}
</script>
