<template lang="pug">
.main-layout
  landing-header
  .main-content
    router-view(v-slot="{ Component }")
      transition(name="fade", mode="out-in")
        component(:is="Component")
  app-footer
</template>
<script lang="ts" setup>
import LandingHeader from "@/components/LandingHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
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
    padding: 30px 0;
    background-color: rgba(30, 40, 50, 0.05);
  }

  p {
    cursor: pointer;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
