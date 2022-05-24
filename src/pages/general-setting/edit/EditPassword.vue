<template>
  <page-header style="height: 4rem">
    <template #slot-left>
      <q-btn
        icon="bi-chevron-left"
        dense
        flat
        :ripple="false"
        size="sm"
        color="black"
        class="q-ml-md"
        @click="$router.go(-1)"
      />
    </template>
    <template #slot-middle>
      <div
        class="defaultfont-light text-bold text-black"
        style="font-size: medium"
      >
        Password
      </div>
    </template>
    <template #slot-right>
      <q-btn
        label="Save"
        unelevated
        rounded
        no-caps
        color="primary"
        class="q-mr-md defaultfont"
        style="height: 3rem"
        @click="onSubmit()"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="password.oldPassword"
        label="Current password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        style="font-size: medium"
        lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Input your old password',
                    ]"
      >
        <template v-slot:append>
          <q-icon
            :name="showPwd ? 'bi-eye-slash-fill' : 'bi-eye-fill'"
            class="cursor-pointer"
            @click="showPwd = !showPwd"
          />
        </template>
      </q-input>

      <q-input
        v-model="password.newPassword"
        label="New password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        class="q-mt-lg"
        style="font-size: medium"
        lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Input your new password',
                    ]"
      >
        <template v-slot:append>
          <q-icon
            :name="showPwd ? 'bi-eye-slash-fill' : 'bi-eye-fill'"
            class="cursor-pointer"
            @click="showPwd = !showPwd"
          />
        </template>
      </q-input>

      <q-input
        v-model="confirmpassword"
        label="Confrim new password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        class="q-mt-lg"
        style="font-size: medium"
        lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Input your confirm password',
                    ]"
      >
        <template v-slot:append>
          <q-icon
            :name="showPwd ? 'bi-eye-slash-fill' : 'bi-eye-fill'"
            class="cursor-pointer"
            @click="showPwd = !showPwd"
          />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ChangePasswordDto } from "src/services/rest-api";
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["changePassword"]),
  },
})

export default class EditHousing extends Vue {

  changePassword!: (changePassword: ChangePasswordDto) => Promise<void>;
  password: ChangePasswordDto = {
    oldPassword: "",
    newPassword: "",
  };

  confirmpassword = "";

  text = ref("");
  showPwd = true;

async onSubmit() {
  this.$q
      .dialog({
        message: "Confirm to delete?",
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {

    try {
      if (this.password.newPassword != this.confirmpassword) {
        this.$q.notify({
          type: "negative",
          message: "Passwords not match!",
        });
        return;
      }
      await this.changePassword(this.password);
      this.$q.notify({
        type: "positive",
        message: "Change password successfully",
      });
    } catch (error: any) {
      this.$q.notify({
        type: "negative",
        message: error.message,
      });
    }
    });
  }

  onClear() {
    this.confirmpassword = "";
    this.password = {
      oldPassword: "",
      newPassword: "",
    };
  }



  confirmEdit() {
    this.$q.dialog({
      title: "Confirm Edit",
      message: "Are you sure you want to publish the changes?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    });
  }
}
</script>
