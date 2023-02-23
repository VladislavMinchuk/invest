<template>
  <section class="regis_section pt-6 pb-6">
    <CarouselSection
      :imagesArr="imgRegist"
      :heading="`${t('registration')} (${t('invitationCode')})`"
      icon="pi-sign-in"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="imgs"
      :heading="t('recharging')"
      icon="pi-money-bill"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="withdrawImgs"
      :heading="t('withdraw')"
      icon="pi-wallet"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="inviteImgs"
      :heading="t('inviteFrends')"
      icon="pi-users"
      class="text-center"
    />
  </section>
</template>

<script setup>
  import CarouselSection from '@/components/CarouselSection.vue';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import regis from '@/assets/images/regist.jpg';
  import rech_link from '@/assets/images/rech_link.jpg';
  import rech_amount from '@/assets/images/rech_amount.jpg';
  import rech_adrs from '@/assets/images/rech_adrs.jpg';
  import rech_list_link from '@/assets/images/rech_list_link.jpg';
  import rech_list from '@/assets/images/rech_list.jpg';
  import with_link from '@/assets/images/with_link.jpg';
  import with_2s from '@/assets/images/with_2s.jpg';
  import wall_adr from '@/assets/images/wall_adr.jpg';
  import with_list from '@/assets/images/with_list.jpg';
  import with_my_list from '@/assets/images/with_my_list.jpg';
  import inv_link from '@/assets/images/inv_link.jpg';
  import inv_table from '@/assets/images/inv_table.jpg';
  
  const { t } = useI18n();

  const imgRegist = ref([
    {
      src: regis,
    },
  ]);
  const imgs = ref([
    {
      src: rech_link,
      title: t('recharging'),
    },
    {
      src: rech_amount,
      title: t('recharging'),
    },
    {
      src: rech_adrs,
      title: t('recharging'),
    },
    {
      src: rech_list_link,
      title: t('checkYourRecharging'),
    },
    {
      src: rech_list,
      title: t('yourRecharging'),
    },
  ]);
  const withdrawImgs = ref([
    {
      src: with_link,
      title: t('withdraw'),
    },
    {
      src: with_2s,
      title: t('withdraw'),
    },
    {
      src: with_list,
      title: t('checkYourRecharging'),
    },
    {
      src: with_my_list,
      title: t('yourRecharging'),
    },
    {
      src: wall_adr,
      title: t('setWalletAddress'),
    },
  ]);
  const inviteImgs = ref([
    {
      src: inv_link,
      title: t('inviteLink'),
    },
    {
      src: inv_table,
      title: t('commissionRate'),
    },
  ]);
</script>
