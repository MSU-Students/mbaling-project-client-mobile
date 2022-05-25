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
        Set chat link
      </div>
    </template>
  </page-header>

  <div class="q-pb-lg flex flex-center defaultfont" style="font-size: 25px">
    Setting up your Chat Link
  </div>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <p>
      Step 1: Open your “Facebook messenger” from your android phone, make sure
      your account is already logged in, if not then please do login your account.
    </p>
    <q-img src="~src\assets\Chat-Link\chatlink-01.jpg" class="q-mb-md rounded-borders border" />

    <p>Step 2: Click your profile from top left to see your menu options.</p>
    <q-img src="~src\assets\Chat-Link\chatlink-02.jpg" class="q-mb-md rounded-borders border" />

    <p>Step 3: Scroll-down and find and click on “Username” option.</p>
    <q-img src="~src\assets\Chat-Link\chatlink-03.jpg" class="q-mb-md rounded-borders border" />

    <p>Step 4: Now click on “Copy link”.</p>
    <q-img src="~src\assets\Chat-Link\chatlink-04.jpg" class="q-mb-md rounded-borders border" />

    <p>
      Step 5: Visit your profile from “mbaling” apps and paste your link onto
      the chat link and save it.
    </p>
    <q-img src="~src\assets\Chat-Link\chatlink-05.jpg" class="q-mb-md rounded-borders border" />
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ChatLink extends Vue {}
</script>
<style>
.border {
  width: 100%;
  height: 100%;
  border: 2px solid rgb(190, 40, 45) !important;
}
</style>
