<template lang="pug">
.main-layout
  app-header
  nav.navbar__wrapper
    .navbar
      p Jewelry & Accessories
      p Clothing & Shoes
      p Home & Living
      p Wedding & Party
      p Toys & Entertainment
      p Art & Collectibles
      p Craft Supplies & Tools
  .main-content
    router-view(v-slot="{ Component }")
      transition(name="fade", mode="out-in")
        component(:is="Component")
</template>
<script lang="ts" setup>
import AppHeader from "@/components/common/AppHeader.vue";
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.main-content {
  display: flex;
  min-height: calc(100vh - 144px);
}

.navbar {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  &__wrapper {
    padding-top: 30px;
    background-color: rgba(30, 40, 50, 0.05);
  }

  p {
    cursor: pointer;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
