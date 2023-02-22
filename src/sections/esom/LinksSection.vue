<template>
  <div class="text-center">
    <div class="btns-wrap">
      <a
        href="https://www.es-glzx.com/#/pages/login/register?invitecode=27CyYD"
        target="_blank"
        class="w-full md:w-5 justify-content-center main-section__out-link p-button p-button-secondary no-underline mb-2"
      >
        <i class="pi pi-sign-in mr-1"></i>
        {{ loc.ukr.registration }}
      </a>
      <router-link v-if="!isGuidePage" to="/esom" class="w-full md:w-5 justify-content-center main-section__out-link p-button p-button-info no-underline mb-2">
        <i class="pi pi-book mr-1"></i>
        {{ loc.ukr.registrationGuide }}
      </router-link>
      <!-- <router-link to="/esom">Registration guide</router-link> -->
    </div>
    <span class="block text-xl font-bold mb-2">{{ loc.ukr.dailyProfit }}</span>
    <p class="mb-2">
      {{ loc.ukr.officialWebsite }}:
      <a
        href="https://www.esomgroup.org/"
        target="_blank"
        class="no-underline text-cyan-500"
        ><i class="pi pi-check"></i> ESOM</a
      >
    </p>
    <p class="mb-2">
      {{ loc.ukr.webApp }}:
      <a
        href="https://www.es-glzx.com"
        target="_blank"
        class="no-underline text-cyan-500"
        ><i class="pi pi-check"></i> ESOM app</a
      >
    </p>
    <div class="grid justify-content-center">
      <div class="col-12 md:col-6 lg:col-4">
        <a
          href="https://apps.apple.com/ua/app/esomqt/id1658509638?l=uk"
          target="_blank"
          class="main-section__dwnl-link"
        >
          <img
            src="@/assets/images/app-store.svg"
            alt="download on app store"
          />
        </a>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.aieco.aiesqaxapp"
          target="_blank"
          class="main-section__dwnl-link"
        >
          <img src="@/assets/images/g-play.svg" alt="download on google play" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import { computed } from 'vue';
  import locales from '@/locales';
  
  const loc = computed(() => locales);
  const route = useRoute();
  const isGuidePage = computed(() => route.name === 'esom');
  // console.log(this.$primevue.config.locale);
</script>

<style lang="scss" scoped>
  .btns-wrap {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-around;
    }
  }
</style>
