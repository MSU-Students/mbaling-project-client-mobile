<template>
  <q-header class="q-px-md q-pt-xl defaultfont bg-secondary">
    <div align="center" class="text-black">
      <q-avatar size="10rem" class="bg-primary">
        <q-img :src="user.prfphoto" />
      </q-avatar>
      <div
        class="q-mt-md q-px-lg defaultfont-bold text-uppercase"
        style="font-size: large"
      >
        {{ user.housingunit }}
      </div>
      <div
        class="q-px-lg defaultfont-light text-primary text-bold"
        style="font-size: medium"
      >
        @{{ user.username }}
      </div>
      <div class="q-mt-sm q-px-md" style="font-size: medium">
        <p style="line-height: 1.2rem">
          {{ user.address1 }}, {{ user.address2 }} <br />
          {{ user.address3 }}, {{ user.address4 }}
        </p>
      </div>
    </div>
    <q-separator color="primary" size="0.1rem" class="q-my-sm" />
  </q-header>

  <q-page class="defaultfont bg-secondary text-black">
    <div class="q-pt-sm q-px-sm q-pb-md defaultfont">
      <div class="q-ml-sm defaultfont-semibold text-body1">POSTS</div>
      <div class="defaultfont row items-start">
        <div
          v-for="post in posts"
          :key="post"
          class="q-pa-xs"
          style="width: 50%"
        >
          <div>
            <q-img
              :src="post.url"
              fit="cover"
              class="bg-primary"
              style="width: 100%; height: 18rem; border-radius: 0.5rem"
              @click="$router.push('/post')"
            >
              <div class="absolute-bottom text-left">
                <q-item-label lines="2" style="font-size: medium">
                  {{ post.title }}
                </q-item-label>
              </div>
            </q-img>
          </div>
        </div>
      </div>
    </div>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn
        icon="bi-arrow-left-short"
        unelevated
        round
        color="black"
        style="opacity: 0.5"
        @click="$router.go(-1)"
      />
    </q-page-sticky>
  </q-page>

  <q-footer
    bordered
    class="q-px-sm defaultfont bg-white text-black"
    style="height: 4rem"
  >
    <div class="row items-center" style="height: 4rem">
      <div align="left" class="col-8">
        <q-btn
          icon="bi-chat-fill"
          flat
          round
          :ripple="false"
          color="black"
          size="md"
          @click="$router.push('/chat')"
        />
      </div>
      <div align="right" class="col">
        <q-btn
          icon="bi-geo-alt-fill"
          flat
          round
          :ripple="false"
          color="black"
          size="md"
          @click="alert()"
        />
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { PostDto, UserDto } from "src/services/rest-api";
import { UserInterface } from "src/store/user/state";
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState("account", ["allAccount", "newUser"]),
  },
  methods: {
    ...mapActions("account", ["getAllUser","getUserById"]),
    ...mapActions("post", ["getAllPost"]),
  },
})

export default class Profile extends Vue {
  getUserById!: (id: any) => Promise<void>;
  getAllPost!: () => Promise<void>;
  getAllUser!: () => Promise<void>;
  newUser!: any
  posts!: PostDto[];
  allAccount!: UserInterface[];
  isStudent = true;

  user: UserDto ={
    fName: "",
    lName: "",
    type: "",
    status: "",
    username: "",
    password: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    year: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
    prfphoto: 0,
    chatLink: "",
    mapLink: "",
    housingID: 0
  }

 async mounted() {
    const postId = this.$route.params.id;
    console.log(postId)
    await this.getAllPost();
    console.log(this.getUserById(postId) + " getUser Here")
    this.user = this.newUser;
    this.newUser = this.getUserById(postId)
    console.log(this.user);
  }
  // user = {
  //   id: 202200001,
  //   username: "zinboarding",
  //   password: "password",
  //   isStudent: false,

  //   firstname: "Azshara",
  //   middlename: "Queldorei",
  //   lastname: "Highborne",
  //   prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",

  //   degree: "",
  //   department: "",
  //   college: "",
  //   yearAdmitted: 0,

  //   addressLine1: "1205 5th Street",
  //   addressLine2: "Dimaluna I",
  //   addressLine3: "Marawi City",
  //   addressLine4: "Lanao del Sur",
  //   housingAddress: "Zin-Azshari Boarding House",

  //   birthdate: "1999-08-31",
  //   gender: "Female",
  //   contact: "09531409858",
  //   email: "azshara.highborne@gmail.com",
  // };
//   posts = [
//     {
//       id: 135413523,
//       title:
//         "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
//       fee: "1200",
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//       prvKitchen: false,
//       prvCR: false,
//       photos: [
//         {
//           id: 1,
//           url: "https://cdn.quasar.dev/img/parallax1.jpg",
//         },
//         {
//           id: 2,
//           url: "https://cdn.quasar.dev/img/mountains.jpg",
//         },
//         {
//           id: 3,
//           url: "https://cdn.quasar.dev/img/quasar.jpg",
//         },
//       ],
//       date: 1631096539262,

//       housingAddress: "Zin-Azshari Boarding House",
//       username: "zinboarding",
//       prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
//     },
//   ];

  alert() {
    this.$q.dialog({
      message: "This feature is not available yet.",
      class: "defaultfont",
    });
  }
}
</script>
