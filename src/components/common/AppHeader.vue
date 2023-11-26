<template lang="pug">
header.header__wrapper
  .header
    .header__search-icon-wrapper
      .header__search-icon
    img.header__logo(src="@/assets/icons/logo.svg", alt="logo")
    .header__cart-and-user
      p.header__user Account
      p.header__cart Shoping
      .header__cart-numbers
        p 2
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.header {
  width: 75%;
  padding: 31px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;

  &__user {
    display: flex;
    cursor: pointer;
    align-items: center;

    &:before {
      content: "";
      margin-right: 8px;
      display: block;
      @include icon-mask("user");
    }
  }

  &__cart {
    display: flex;
    cursor: pointer;
    align-items: center;

    &-numbers {
      position: absolute;
      width: 17px;
      height: 17px;
      border-radius: 250px;
      display: flex;
      justify-content: center;
      font-size: 13px;
      background-color: #ff6f61;
      color: var(--white);
      right: 60px;
      bottom: -6px;

      p {
        margin-top: 1px;
      }
    }

    &-and-user {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 20%;
      gap: 22px;
    }

    &:before {
      content: "";
      margin-right: 8px;
      display: block;
      @include icon-mask("cart");
    }
  }

  &__logo {
    height: 34px;
  }

  &__search-icon {
    @include icon-mask("search");

    &-wrapper {
      width: 20%;
    }
  }

  &__wrapper {
    background-color: #f4f4f5;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
  }
}
</style>
