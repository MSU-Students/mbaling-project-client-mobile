<template>
  <!--  -->
<div class="q-mb-md defaultfont text-grey-6" style="font-size: small">
List of Applicants:
</div>
  <div>
    <q-list v-for="pending in getPendingAccount" :key="pending">
      <q-card class="q-ma-sm" style="height: 7rem">
        <div class="row">
          <div class="col-3">
      <q-avatar size="5rem">
        <q-img src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg" />
      </q-avatar>
          </div>
          <div class="col q-mt-sm defaultfont-bold" style="font-size: large;">
              {{pending.student?.fName}} {{pending.student?.lName}}
              <div class="defaultfont text-grey-6" style="font-size: small;">
                is requesting you to join your boarder
              </div>
              <div v-if="(pending.status == 'pending')" class="q-mt-sm q-ml-xs ">
                <q-btn class="q-mx-xs" color="primary" ripple="false" unelevated text-color="secondary" label="accept" rounded dense style="width: 7rem" @click="ApproveApplicant(pending.id)"/>
                <q-btn class="q-mx-xs" color="primary" ripple="false" unelevated label="cancel" rounded outline dense style="width: 7rem" />
              </div>

              <!-- <div v-if="(pending.status != 'pending')" class="q-mt-sm q-ml-xs ">
                <q-btn class="q-mx-xs" color="primary" ripple="false" unelevated label="appcepted" rounded outline dense style="width: 15rem" />
              </div> -->
          </div>
        </div>
      </q-card>
    </q-list>
  </div>

  <!--  -->
</template>

<script lang="ts">
import { ApplicationDto, UserDto } from "src/services/rest-api";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("application", ["getAllApplication", "updateApplication"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapState("application", ["applications"]),
    ...mapGetters("application", ["getPendingAccount"]),
  },
})
export default class ListApplicants extends Vue {
  updateApplication!: (payload: any) => Promise<void>;
  getAllApplication!: () => Promise<void>;
  applications!: ApplicationDto[];
  getPendingAccount!: ApplicationDto[];
  currentUser!: any;
  data: any = [];

  columns = [

    {
      name: "name",
      label: "Name",
      align: "left",
      field: (row: ApplicationDto) =>
        row.student?.fName + " " + row.student?.lName,
    },
    {
      name: "status",
      required: true,
      label: "Applicant Status",
      align: "left",
      field: "status",
    },
  ];

  async mounted() {
    await this.getAllApplication();
    this.data = this.getPendingAccount
      .filter((i) =>i.landlord?.id == this.currentUser.id)
    console.log(this.data);
  }

  async ApproveApplicant(id: any) {
    console.log("Approve here");
    await this.updateApplication({
      id,
      status: 'accepted',
    });
  }

  disapproveApplicant(id: any) {
    console.log("DisApprove here");
  }

  colorManipulation(status: string) {
    console.log("status", status);
    if (status == "pending") {
      return "orange";
    } else if (status == "banned") {
      return "red";
    } else {
      return "green";
    }
  }
  labelManipulation(status: string) {
    if (status == "pending") {
      return "Pending";
    } else if (status == "banned") {
      return "Banned";
    } else {
      return "Available";
    }
  }
}
</script>
