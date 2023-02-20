<template>
  <section class="regis_section pt-6 pb-6">
    <CarouselSection
      :imagesArr="imgRegist"
      heading="Registration (Invitation code: 27CyYD)"
      icon="pi-sign-in"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="imgs"
      heading="Recharging (top-up)"
      icon="pi-money-bill"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="withdrawImgs"
      heading="Withdraw"
      icon="pi-wallet"
      class="text-center"
    />
    <CarouselSection
      :imagesArr="inviteImgs"
      heading="Invite frends / create your team"
      icon="pi-users"
      class="text-center"
    />
  </section>
</template>

<script setup>
  import CarouselSection from '@/components/CarouselSection.vue';
  import { ref } from 'vue';
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

  const imgRegist = ref([
    {
      src: regis,
    },
  ]);
  const imgs = ref([
    {
      src: rech_link,
      title: 'Recharging (top-up)',
    },
    {
      src: rech_amount,
      title: 'Recharging (top-up)',
    },
    {
      src: rech_adrs,
      title: 'Recharging (top-up)',
    },
    {
      src: rech_list_link,
      title: 'Check your recharging',
    },
    {
      src: rech_list,
      title: 'Your recharging',
    },
  ]);
  const withdrawImgs = ref([
    {
      src: with_link,
      title: 'Withdraw',
    },
    {
      src: with_2s,
      title: 'Withdraw',
    },
    {
      src: with_list,
      title: 'Check your withdraw list',
    },
    {
      src: with_my_list,
      title: 'Your withdraw list',
    },
    {
      src: wall_adr,
      title: 'Set your wallet address',
    },
  ]);
  const inviteImgs = ref([
    {
      src: inv_link,
      title: 'Invite link',
    },
    {
      src: inv_table,
      title: 'Commission rate',
    },
  ]);
</script>
