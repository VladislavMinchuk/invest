<template>
  <section class="main-section pt-6 pb-6">
    <BgAnim class="bg-animation" />
    <div class="container">
      <div class="grid">
        <div class="col-12 lg:col-6">
          <div class="grid align-items-center justify-content-between mb-2">
            <div class="col-6">
              <h1>ESOM</h1>
            </div>
            <div class="col-6">
              <img src="@/assets/images/logo-esom.png" alt="esom" />
            </div>
          </div>
          <p class="mb-4">
            {{ t('esom.overviewMsg') }}
            <span class="block text-xl font-bold pt-2">{{ t('dailyProfit') }}</span>
          </p>
          <div class="grid mb-3 text-center main-section__btn-wrap">
            <div class="md:col-6 col-12">
              <a
                href="https://www.es-glzx.com/#/pages/login/register?invitecode=27CyYD"
                target="_blank"
                class="w-full justify-content-center main-section__out-link p-button p-button-secondary"
              >
                <i class="pi pi-sign-in mr-1"></i>
                {{ t('registration') }}
              </a>
            </div>
            <div class="md:col-6 col-12">
              <a
                href="#calc"
                class="w-full justify-content-center main-section__out-link p-button text-white"
              >
                <i class="pi pi-calculator mr-1"></i>
                {{ t('calculateProfit') }}
              </a>
            </div>
          </div>

          <p class="mb-2">{{ t('downloadApp') }}:</p>
          <div class="grid">
            <div class="col-6 md:col-auto">
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
            <div class="col-6 md:col-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.aieco.aiesqaxapp"
                target="_blank"
                class="main-section__dwnl-link"
              >
                <img
                  src="@/assets/images/g-play.svg"
                  alt="download on google play"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 lg:col-6">
          <div class="grid align-items-center mb-2">
            <div class="col-10">
              <h2>{{ t('esom.whatQuantTr') }}</h2>
            </div>
            <div class="col-2">
              <i class="heading-icon pi pi-bolt"></i>
            </div>
          </div>
          <p class="mb-3">
            {{ t('esom.quantitativeTrading') }}
          </p>
          <p class="mb-2">
            {{ t('officialWebsite') }}:
            <a
            href="https://www.esomgroup.org/"
            target="_blank"
            class="no-underline text-cyan-500"
            ><i class="pi pi-check"></i> ESOM</a
            >
          </p>
          <p class="mb-2">
            {{ t('webApp') }}:
            <a
              href="https://www.es-glzx.com"
              target="_blank"
              class="no-underline text-cyan-500"
              ><i class="pi pi-check"></i> ESOM app</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import BgAnim from '@/components/BgAnim.vue';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
</script>

<style lang="scss" scoped>
  .main-section {
    color: $white;
    background-color: $black;
    line-height: 1.5;
    &__dwnl-link {
      display: inline-block;
      vertical-align: top;
      max-width: 200px;
      img {
        width: 100%;
      }
    }

    &__out-link {
      text-decoration: none;
      color: $black;
    }

    &__btn-wrap {
      button,
      a {
        line-height: 1.3;
      }
    }

    .heading-icon {
      font-size: 2rem;
      color: $orange;
    }
  }
</style>
