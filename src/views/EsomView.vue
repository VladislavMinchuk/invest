<template>
  <div class="esom-view-page">
    <PreviewSection />
    <RegistrationSection />
    <section>
      <div id="calc" class="container">
        <div class="grid justify-content-center pb-6">
          <div class="col-12 md:col-8">
            <Esom class="mb-3" />
            <LinksSection />
            <div class="text-center">
              <p>{{ loc.ukr.anyQuestions }}</p>
              <p>
                <p>{{ loc.ukr.contactMe }}:</p>
                <a href="mailto:your.invest.anderson@gmail.com"
                  >your.invest.anderson@gmail.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ScrollTop />
  </div>
</template>

<script setup>
  import ScrollTop from 'primevue/scrolltop';
  import PreviewSection from '../sections/esom/PreviewSection.vue';
  import RegistrationSection from '../sections/esom/RegistrationSection.vue';
  import LinksSection from '../sections/esom/LinksSection.vue';
  import Esom from '@/components/CalcEsom.vue';
  import locales from '@/locales';
  import { computed } from 'vue';
  
  const loc = computed(() => locales);
</script>

<style lang="scss" scoped></style>
