<template lang="pug">
section.page__wrapper
  .page
    transition(name="fade", mode="out-in", appear)
      .page__text-wrapper(v-if="true")
        p.page__title Collections
        p.page__text You can explore ans shop many different collection
        p.page__text from various barands here.
    transition(name="slide", mode="out-in", appear)
      img.page__main-image(v-if="true", src="@/assets/images/main-image.png")
  img.page__decoration--left(src="@/assets/icons/main-page-left.svg")
  img.page__decoration--right(src="@/assets/icons/main-page-right.svg")
</template>
<style lang="scss" scoped>
.slide-enter-from {
  transform: translateX(30px);
}

.slide-enter-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 2s ease;
}

.page {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__main-image {
    width: 30%;
  }

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
    min-height: calc(100vh - 144px);
    background-color: #f4f4f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
