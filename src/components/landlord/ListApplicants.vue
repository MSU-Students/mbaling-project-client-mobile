<template>
  <div class="text-h6">List of Applicants</div>
  <q-table
    hide-bottom
    :columns="columns"
    :rows="getPendingAccount"
    row-key="status"
  >
    <template #body-cell-status="props">
      <q-td :props="props">
        <q-btn
          rounded
          :text-color="colorManipulation(props.row.status)"
          color="white"
          :label="labelManipulation(props.row.status)"
        >
          <q-menu anchor="center middle" self="center middle">
            <q-list class="text-center" style="min-width: 50px">
              <q-item
                class="text-green"
                clickable
                @click="ApproveApplicant(props.row.id)"
                v-close-popup
              >
                <q-item-section>Approve</q-item-section>
              </q-item>
              <q-item
                class="text-red"
                clickable
                @click="disapproveApplicant(props.row.id)"
                v-close-popup
              >
                <q-item-section>Disapprove</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>
  </q-table>
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
    console.log(this.getPendingAccount);
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
