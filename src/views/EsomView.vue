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
              <p>{{ t('anyQuestions') }}</p>
              <p>
                <p>{{ t('contactMe') }}:</p>
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
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
