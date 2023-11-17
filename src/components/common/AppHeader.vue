<template lang="pug">
.header__wrapper
  header.header
    .header__search-icon-wrapper
      .header__search-icon
    img.header__logo(src="@/assets/icons/logo.svg", alt="logo")
    .header__cart-and-user
      p.header__user Account
      p.header__cart Shoping
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

  &__cart-and-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    gap: 22px;
  }

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
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
  }
}
</style>
