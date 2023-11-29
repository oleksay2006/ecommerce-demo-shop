<template lang="pug">
section.page__wrapper
  .page
    .page__text-wrapper
      h1.page__title Collections
      h2.page__text You can explore ans shop many different collection
      h2.page__text from various barands here.
    figure.page__main-image_wrapper
      img.page__main-image(src="@/assets/images/main-image.png")
  img.page__decoration--left(src="@/assets/icons/main-page-left.svg")
  img.page__decoration--right(src="@/assets/icons/main-page-right.svg")
</template>
<style lang="scss" scoped>
@keyframes slideLeft {
  from {
    transform: translateX(30px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__main-image {
    width: 100%;

    &_wrapper {
      animation-name: slideLeft;
      animation-duration: 1s;
      width: 30%;
    }
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

    &-wrapper {
      animation-name: fadeIn;
      animation-duration: 1.5s;
    }
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
