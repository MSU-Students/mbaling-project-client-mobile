<template>
  <q-header class="q-px-md q-pt-xl defaultfont bg-secondary">
    <div align="center" class="text-black">
      <q-avatar size="10rem" class="bg-primary">
        <q-img v-if="user.prfphoto" class="avatar" :src="`http://localhost:3000/media/${user.prfphoto}`" />
        <q-img v-if="!user.prfphoto" class="avatar" src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg" />
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
  <div class="q-ml-md defaultfont-bold">
    Boraders:
    <span class="defaultfont-light">{{this.data.length}}</span>
  </div>
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
          <div v-if="post.userID === user.id">

            <q-img
              :src="`http://localhost:3000/media/${post.url}`"
              fit="cover"
              class="bg-primary"
              style="width: 100%; height: 16rem; border-radius: 0.5rem"
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
        <a
          :href="`${user.chatLink}`"
          target="_blank"
          style="text-decoration: none"
          @click="alert()"
        >
          <q-icon size="1.4rem" color="black" class="q-pl-sm bi bi-chat-fill">
          </q-icon>
        </a>
      </div>
      <div align="right" class="col">
        <!-- <q-btn
          icon="bi-geo-alt-fill"
          flat
          round
          :ripple="false"
          color="black"
          size="md"
          @click="alert()"
        /> -->
        <a
          :href="`${user.mapLink}`"
          target="_blank"
          style="text-decoration: none"
        >
          <q-icon size="1.4rem" color="black" class="q-pr-sm bi-geo-alt-fill">
          </q-icon>
        </a>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { ApplicationDto, PostDto, UserDto } from "src/services/rest-api";
import { UserInterface } from "src/store/user/state";
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions, mapGetters } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState("account", ["allAccount", "newUser"]),
    ...mapState("application", ["applications"]),
    ...mapGetters("application", ["getAcceptedAccount"]),
  },
  methods: {
    ...mapActions("account", ["getAllUser", "getUserById"]),
    ...mapActions("post", ["getAllPost"]),
    ...mapActions("application", ["getAllApplication", "updateApplication"]),
  },
})
export default class Profile extends Vue {
  getUserById!: (id: any) => Promise<void>;
  getAllPost!: () => Promise<void>;
  getAllUser!: () => Promise<void>;
  getAllApplication!: () => Promise<void>;

  data: any = [];
  getAcceptedAccount!: ApplicationDto[];
  newUser!: any;
  posts!: PostDto[];
  allAccount!: UserInterface[];
  isStudent = true;

  user: UserDto = {
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
    housingID: 0,
  };

  async mounted() {
    const userId = this.$route.params.id;
    await this.getUserById(userId);
    this.user = this.newUser;
    await this.getAllPost();
    await this.getAllApplication()
    this.data = this.getAcceptedAccount.filter(
      (i) => i.landlord?.id == this.user.id
    );
  }

  alert() {
    if(this.user.chatLink == "")
    this.$q.dialog({
      message: "This feature is not available yet.",
      class: "defaultfont",
    });
  }
}
</script>
<style>
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50% !important;
  border: 2px solid rgb(190, 40, 45) !important;
}
</style>
