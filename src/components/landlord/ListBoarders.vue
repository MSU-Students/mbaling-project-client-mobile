<template>
  <div class="text-h6" align="right">
    <span class="defaultfont float-left" style="font-size: medium">
      List of Boarders
    </span>
    <q-btn
      icon="add"
      label="Insert Boarders"
      dense
      unelevated
      rounded
      no-caps
      color="primary"
      class=" text-caption defaultfont"
      style="width: 8rem"
    />
  </div>
  <q-table

    flat
    hide-bottom
    :columns="columns"
    :rows="data"
    row-key="status">
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn
            color="red-5"
            icon="delete"
            size="sm"
            class="q-ml-sm"
            flat
            round
            dense
            @click="deleteAcceptedStudent(props.row)"
          />
        </q-td>
      </template>
  </q-table>
</template>

<script lang="ts">
import { ApplicationDto } from "src/services/rest-api";
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
    ...mapGetters("application", ["getAcceptedAccount"]),
  },
})
export default class ListBoarders extends Vue {
  updateApplication!: (payload: any) => Promise<void>;
  getAllApplication!: () => Promise<void>;
  applications!: ApplicationDto[];
  getAcceptedAccount!: ApplicationDto[];
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
      name: "action",
      required: true,
      label: "  ",
      align: "left",
      field: "action",
    },
  ];

  async mounted() {
    await this.getAllApplication();
    this.data = this.getAcceptedAccount.filter(
      (i) => i.landlord?.id == this.currentUser.id
    );
    console.log(this.data);
  }

  async deleteAcceptedStudent(id: any) {
    console.log("Delete here");
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
