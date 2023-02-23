<template>
  <section>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imagesArr"
      :index="indexRef"
      @hide="onHide"
    />
    <div class="container">
      <h2 class="mb-4">
        <i v-if="icon" :class="icon" class="pi pi-money-bill"></i> {{ heading }}
      </h2>
      <p>
        <i class="pi pi-arrow-down"></i> {{ clickText || t('clickImageZoom') }}
        <i class="pi pi-arrow-down"></i>
      </p>
      <Carousel
        :value="imagesArr"
        :responsiveOptions="responsiveOptions"
        :numVisible="2"
        :numScroll="1"
        class="mb-6"
      >
        <template #item="slotProps">
          <div
            class="regis_section__carousek-imgs"
            @click="() => show(slotProps.index)"
          >
            <img :src="slotProps.data.src" />
            <p class="title" v-html="slotProps.data.title" />
          </div>
        </template>
      </Carousel>
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import Carousel from 'primevue/carousel';
  import { useI18n } from 'vue-i18n';
  
  defineProps({
    heading: String,
    clickText: {
      type: String,
    },
    icon: String,
    imagesArr: Array,
  });
  
  const { t } = useI18n();
  
  const responsiveOptions = ref([
    // {
    //   breakpoint: '1024px',
    //   numVisible: 3,
    //   numScroll: 3,
    // },
    {
      breakpoint: '820px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ]);

  const visibleRef = ref(false);
  const indexRef = ref(0); // default 0

  const show = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
  };
  const onHide = () => (visibleRef.value = false);
</script>

<style lang="scss" scoped>
  .regis_section__carousek-imgs {
    max-width: 300px;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }
</style>