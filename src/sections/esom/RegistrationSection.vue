<template>
  <section class="regis_section pt-6 pb-6">
    <CarouselSection
      :imagesArr="imgRegist"
      :heading="`${loc.ukr.registration} (${loc.ukr.invitationCode})`"
      icon="pi-sign-in"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="imgs"
      :heading="loc.ukr.recharging"
      icon="pi-money-bill"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="withdrawImgs"
      :heading="locales.ukr.withdraw"
      icon="pi-wallet"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="inviteImgs"
      :heading="locales.ukr.inviteFrends"
      icon="pi-users"
      class="text-center"
    />
  </section>
</template>

<script setup>
  import CarouselSection from '@/components/CarouselSection.vue';
  import { ref, computed } from 'vue';
  import locales from '@/locales';
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
  
  const loc = computed(() => locales);

  const imgRegist = ref([
    {
      src: regis,
    },
  ]);
  const imgs = ref([
    {
      src: rech_link,
      title: locales.ukr.recharging,
    },
    {
      src: rech_amount,
      title: locales.ukr.recharging,
    },
    {
      src: rech_adrs,
      title: locales.ukr.recharging,
    },
    {
      src: rech_list_link,
      title: locales.ukr.checkYourRecharging,
    },
    {
      src: rech_list,
      title: locales.ukr.yourRecharging,
    },
  ]);
  const withdrawImgs = ref([
    {
      src: with_link,
      title: locales.ukr.withdraw,
    },
    {
      src: with_2s,
      title: locales.ukr.withdraw,
    },
    {
      src: with_list,
      title: locales.ukr.checkYourRecharging,
    },
    {
      src: with_my_list,
      title: locales.ukr.yourRecharging,
    },
    {
      src: wall_adr,
      title: locales.ukr.setWalletAddress,
    },
  ]);
  const inviteImgs = ref([
    {
      src: inv_link,
      title: locales.ukr.inviteLink,
    },
    {
      src: inv_table,
      title: locales.ukr.commissionRate,
    },
  ]);
</script>
