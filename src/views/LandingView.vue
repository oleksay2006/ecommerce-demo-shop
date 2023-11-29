<template lang="pug">
main.landing-wrapper
  landing-hero-section
  landing-shop-section
</template>
<script lang="ts" setup>
import LandingHeroSection from "@/components/LandingHeroSection.vue";
import LandingShopSection from "@/components/LandingShopSection.vue";
</script>
<style scoped lang="scss">
.landing-wrapper {
  width: 100%;
}
</style>
