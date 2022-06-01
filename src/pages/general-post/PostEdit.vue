<template>
<q-form @submit="onSaveEditPost()" greedy>
  <q-page class="defaultfont text-black">
    <div class="bg-black">
      <q-img
      v-if="post.url"
      :src="`http://localhost:3000/media/${post.url}`"/>
      <div
        v-if="!post.url"
        class="bg-grey-4 row items-center justify-evenly"
        style="height: 100%; border-radius: 2rem 2rem 0 0"
      >
        <q-icon name="bi-image" size="10rem" color="grey" />
      </div>
    </div>

    <!-- <div align="right" class="q-px-md q-py-sm row items-center">
      <div class="col">
        <q-btn
          v-on:click="showClearBtn = !showClearBtn"
          label="Upload"
          unelevated
          rounded
          no-caps
          color="primary"
          class="q-ml-sm text-center"
          style="height: 2rem"
        />
        <Transition name="appear">
          <q-btn
            v-show="showClearBtn"
            icon="bi-x-circle"
            flat
            dense
            :ripple="false"
            size="md"
            class="q-ml-sm text-primary"
          />
        </Transition>
      </div>
    </div> -->

<div class="q-mt-sm q-px-xl">
        <q-file
          disable
          outlined
          label="Upload Image"
          accept=".jpg, image/*"
          v-model="imageAttachement"
        >
        </q-file>
      </div>
    <div class="q-mt-sm q-px-md">
      <q-input
        v-model="post.title"
        autogrow
        dense
        placeholder="Title"
        input-class="text-center"
        style="font-size: medium"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please Input Title']"
         hide-bottom-space
      />
      <q-input
        v-model="post.fee"
        dense
        placeholder="Monthly Fee"
        input-class="text-center"
        class="q-mt-xs q-px-xl"
        style="font-size: medium"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please Input Fee']"
         hide-bottom-space
      />

      <div class="q-px-md q-mt-md row items-center">
        <div align="center" class="col">
          <q-checkbox
            label="Private Kitchen"
            v-model="post.prvCR"
            dense
            color="primary"
          />
        </div>
        <div align="center" class="col">
          <q-checkbox
            label="Private CR"
            v-model="post.prvKitchen"
            dense
            color="primary"
          />
        </div>
      </div>

      <q-input
        v-model="post.description"
        type="textarea"
        placeholder="Description"
        class="q-mt-md q-pb-lg"
        style="font-size: small"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please Input Description']"
         hide-bottom-space
      />

      <q-input
        v-model="inputNumber.contact"
        dense
        type="tel"
        mask="#### - ### - ####"
        placeholder="Contact No."
        input-class="text-left"
        class="q-mt-xs q-px-xs"
        style="font-size: medium"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please Input Contact']"
         hide-bottom-space
      />
    </div>

    <q-page-sticky position="top-left" :offset="[18, 18]">
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
    class="q-px-md defaultfont bg-white row items-center"
    style="height: 4rem"
  >
    <div align="right" class="col">
      <q-btn
        label="Save"
        unelevated
        rounded
        no-caps
        color="primary"
        style="height: 3rem; width: 5rem"
        type="submit"
      />
    </div>
  </q-footer>
  </q-form>
</template>

<script lang="ts">
import { PostDto, UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import Post from "./Post.vue";

@Options({
  computed: {
    ...mapState("post", ["newPost"]),
    ...mapState("auth", ["currentUser"]),
  },
  methods: {
    ...mapActions("post", ["getPostById", "editPost"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("auth", ["authUser"]),
  },
})

export default class PostEdit extends Vue {
  editPost!: (payload: PostDto) => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  getPostById!: (id: any) => Promise<void>;
  authUser!: () => Promise<void>;
  newPost!: any;

  currentUser!: AUser;

 pkBox = false;
  pcBox = false;
  showClearBtn = false;
  addnewPost = false;
  model = "";
  imageAttachement: File[] | File = [];

  post: any = {
    description: "",
    fee: "",
    Negotiable: false,
    prvCR: false,
    prvKitchen: false,
    photos: "",
    title: "",
    date: 0,
    housingAddress: "",
    prfphoto: 0,
    url: 0,
    userID: 0,
  };

  inputNumber: any = {
    contact: "",
  }

  async mounted() {
    const postId = this.$route.params.id;
    await this.getPostById(postId);
    this.post = {...this.newPost};
    console.log(this.post);
    await this.authUser();
    this.inputNumber = {...this.currentUser}
  }

  async onSaveEditPost(){
    console.log("Yeahh!!")
    await this.editPost(this.post);
    await this.editAccount(this.inputNumber)
    this.$router.go(-1)
    this.$q.notify({
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          type: 'positive',
          classes: "defaultfont",
          message: 'Successfully Edited!',
        });
  }

//   post = {
//     id: 135413523,
//     title:
//       "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
//     fee: 1200,
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
//     prvKitchen: false,
//     prvCR: true,
//     photos: [
//       {
//         id: 1,
//         url: "https://cdn.quasar.dev/img/parallax1.jpg",
//       },
//       {
//         id: 2,
//         url: "https://cdn.quasar.dev/img/mountains.jpg",
//       },
//       {
//         id: 3,
//         url: "https://cdn.quasar.dev/img/quasar.jpg",
//       },
//     ],
//     date: 1631096539262,

//     firstname: "Azshara",
//     middlename: "Queldorei",
//     lastname: "Highborne",
//     prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
//     housingName: "Zin-Azshari Boarding House",
//   };

  // title = ref(this.post.title);
  // fee = ref(this.post.fee);
  // description = ref(this.post.description);
  // pkBox = ref(this.post.prvKitchen);
  // pcBox = ref(this.post.prvCR);

  alert() {
    this.$q.dialog({
      message: "This feature is not available yet.",
      class: "defaultfont",
    });
  }
}
</script>

<style>
.appear-enter-active {
  animation: bounce-in 0.5s;
}
.appear-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
