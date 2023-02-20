<script setup>
  import BlockAnim from '@/components/BlockAnim.vue';
  import { RouterLink } from 'vue-router';

  // import ListBots from '@/sections/ListBots.vue';
</script>
<template>
  <div>
    <section class="preview-section pt-4 pb-4">
      <div class="container h-full">
        <div class="grid align-items-center h-full">
          <div class="lg:col-6">
            <h1 class="mb-3">Welcome to Your Invest project!</h1>
            <p class="mb-4">
              Trader Bots! We provide you overview the best automated trading
              bots that use powerful AI algorithms to maximize your returns in
              the cryptocurrency market. With these bots, you get access to
              advanced trading strategies, monitoring, and analysis tools to
              maximize your earnings. These bots are designed to help you become
              a successful investor in the crypto space. <br />
              Sign up today and start trading like a pro!
            </p>
            <RouterLink
              to="/esom"
              class="p-button p-button-secondary no-underline pl-4 pr-4"
              >Get start</RouterLink
            >
            <p class="text-xs">More projects coming soon ...</p>
          </div>
          <BlockAnim class="block-anim" />
        </div>
      </div>
    </section>
    <!-- <ListBots /> -->
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    font-size: 46px;
    line-height: 1.2;

    @media screen and (max-width: 769px) {
      font-size: 32px;
    }
  }

  .preview-section {
    position: relative;
    height: 90vh;
    line-height: 1.6;
  }

  .block-anim {
    position: absolute;
    top: 10%;
    right: 0;
    width: 100%;
    opacity: 0.3;
    z-index: -1;
    @media screen and (min-width: 768px) {
      width: 65%;
    }
    @media screen and (min-width: 1024px) {
      top: 15%;
      opacity: 1;
      width: 50%;
    }
  }
</style>
