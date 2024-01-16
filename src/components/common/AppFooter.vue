<template lang="pug">
footer.footer__wrapper
  .footer
    p.footer__text © 2024 Coral, Inc.
    figure
      img(src="@/assets/images/cards.png", alt="Cards")
    a.footer__to-top(href="#")
      p.footer__text Scroll to top
      .footer__icon
</template>
<style scoped lang="scss">
.footer {
  width: 70%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  &__icon {
    margin-left: 4px;
    transform: rotate(90deg);
    @include icon-mask("arrow", 20px, 20px, var(--white));
  }

  &__to-top {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 14%;
    text-decoration: none;
  }

  &__text {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--white);
  }

  &__wrapper {
    width: 100%;
    height: 52px;
    background-color: var(--black);
  }
}
</style>
