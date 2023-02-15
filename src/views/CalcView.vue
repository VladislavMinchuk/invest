<script setup>
  // import Numann from '@/components/CalcNuWallet.vue';
  import Esom from '@/components/CalcEsom.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const components = { esom: Esom };
  const currentCalculation = computed(() => components[route.params.id]);
</script>
<template>
  <section class="pt-6 pb-6">
    <div class="container">
      <div class="grid">
        <div class="col-12 md:col-6 md:col-offset-3">
          <component :is="currentCalculation"></component>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
