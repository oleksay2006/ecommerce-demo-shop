<template lang="pug">
.page__wrapper
  .page
    p.page__title Collections
    p.page__text You can explore ans shop many different collection
    p.page__text from various barands here.
  img.page__decoration--left(src="@/assets/icons/main-page-left.svg")
  img.page__decoration--right(src="@/assets/icons/main-page-right.svg")
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.page {
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  &__decoration {
    position: absolute;

    &--left {
      @extend .page__decoration;
      top: 60%;
    }

    &--right {
      @extend .page__decoration;
      right: 0;
      top: 30%;
    }
  }

  &__text {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 55px;
  }

  &__title {
    font-size: 74px;
    font-weight: 300;
    line-height: 55px;
    margin-bottom: 52px;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    background-color: rgba(30, 40, 50, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
