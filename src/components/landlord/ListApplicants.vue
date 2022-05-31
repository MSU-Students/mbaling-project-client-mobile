<template>
  <div class="text-h6">List of Applicants</div>
  {{}}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions('application', ['getAllApplication', 'updateApplication']),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapState('application', ['applications']),
  },
})

export default class ListApplicants extends Vue {
  getAllApplication!: () => Promise<void>
  applications!: any[];
  currentUser!: any;
  data: any = []

  async mounted() {
    console.log('List of Applicant Here')
    await this.getAllApplication();
    this.data = this.applications.filter(
      (i) => i.status == 'pending' && i.landlord.id == this.currentUser.id )
      .map((a: any) => {
        return {
          id: a.id,
          name: a.student.fName,
          status: a.status
        };
      });
    console.log(this.data);
  }
}
</script>
