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
        @click="confirmEdit()"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="text"
        label="Current password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        style="font-size: medium"
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
        v-model="text"
        label="New password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        class="q-mt-lg"
        style="font-size: medium"
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
        v-model="text"
        label="Confrim new password"
        stack-label
        :type="showPwd ? 'password' : 'text'"
        class="q-mt-lg"
        style="font-size: medium"
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
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class EditHousing extends Vue {
  text = ref("");
  showPwd = ref(true);

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
