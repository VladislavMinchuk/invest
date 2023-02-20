<script setup>
  // import Numann from '@/components/CalcNuWallet.vue';
  import Esom from '@/components/CalcEsom.vue';
  import LinksSection from '../sections/esom/LinksSection.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const components = { esom: Esom };
  const pageId = computed(() => route.params.id);
  const currentCalculation = computed(() => components[pageId.value]);
</script>
<template>
  <section class="pt-6 pb-6">
    <div class="container">
      <div class="grid justify-content-center">
        <div class="col-12 md:col-6">
          <component :is="currentCalculation"></component>
        </div>
        <div v-if="pageId === 'esom'" class="col-12 md:col-7">
          <LinksSection />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
