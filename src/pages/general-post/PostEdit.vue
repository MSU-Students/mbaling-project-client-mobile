<template>
  <q-page class="defaultfont text-black">
    <div class="bg-black" style="height: 20rem">
      <div
        class="bg-grey-4 row items-center justify-evenly"
        style="height: 100%; border-radius: 2rem 2rem 0 0"
      >
       <q-img
          :src="`http://localhost:3000/media/${post.url}`"/>
        <!-- <q-icon name="bi-image" size="xl" color="grey" /> -->
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

<!-- Upload Picture -->
    <div class="row">
    <div class="col">
       <q-file
        class="q-pr-lg text-primary"
        outlined
        label="Upload"
        accept=".jpg, image/*"
        item-aligned
        style="width: 13rem;"
      >
        <template v-slot:prepend>
          <q-icon name="album" />
        </template>
      </q-file>
    </div>
    <div class="col">
      <q-file
        class="q-pr-lg text-primary"
        disable
        outlined
        label="Capture"
        accept=".jpg, image/*"
        item-aligned
        style="width: 13rem;"
        @click="alert()"
      >
        <template v-slot:prepend>
          <q-icon name="camera" />
        </template>
      </q-file>
    </div>
    </div>
<!--  -->

    <div class="q-mt-sm q-px-md">
      <q-input
        v-model="post.title"
        filled
        dense
        type="text"
        placeholder="Title"
        input-class="text-on-left"
        style="font-size: medium"
      />
      <div class="row">
        <div class="col">
      <q-input
        class="q-mt-sm"
        v-model="post.fee"
        prefix="P"
        dense
        filled
        type="number"
        placeholder="Monthly Fee"
        input-class="text-on-left"
        style="font-size: medium"
      />
      </div>
      <div class="col q-pt-sm q-pl-sm">
          <q-checkbox
            label="Negotiable"
            v-model="post.Negotiable"
            color="primary"
            style="font-size: medium"
          />
      </div>
      </div>

        <div class="q-pt-md q-pl-lg">
          <q-checkbox
            label="Private Kitchen"
            v-model="post.prvKitchen"
            color="primary"
            style="font-size: medium"
            dense
          />
        </div>
        <div class="q-pt-md q-pl-lg">
          <q-checkbox
            label="Private CR"
            v-model="post.prvCR"
            color="primary"
            style="font-size: medium"
            dense
          />
        </div>

      <q-input
        v-model="post.description"
        type="textarea"
        filled
        placeholder="Description"
        class="q-mt-md q-pb-lg"
        style="font-size: md;"
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
        @click="onSaveEditPost()"
      />
    </div>
  </q-footer>
</template>

<script lang="ts">
import { PostDto } from "src/services/rest-api";
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import Post from "./Post.vue";

@Options({
  computed: {
    ...mapState("post", ["newPost"]),
  },
  methods: {
    ...mapActions("post", ["getPostById", "editPost"]),
  },
})

export default class PostEdit extends Vue {
  editPost!: (payload: PostDto) => Promise<void>;
  getPostById!: (id: any) => Promise<void>;
  newPost!: any;


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
    userID: 0
  };

  async mounted() {
    const postId = this.$route.params.id;
    await this.getPostById(postId);
    this.post = {...this.newPost};
    console.log(this.post);
  }

  async onSaveEditPost(){
    console.log("Yeahh!!")
    await this.editPost(this.post);
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

  showClearBtn = false;

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
