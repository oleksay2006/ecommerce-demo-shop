<template lang="pug">
header.header__wrapper
  .header
    .header__search-icon-wrapper
      .header__search-icon(
        role="search",
        aria-label="Search icon",
        v-if="!isOpenSearchOverlay",
        @click="toggleSearchOverlay"
      )
    router-link(to="/")
      img.header__logo(src="@/assets/icons/logo.svg", alt="logo")
    .header__cart-and-user
      p.header__user Account
      .header__dropdown(:class="{ opened: isDropdownOpened }")
        p.header__cart(ref="dropdownIcon", @click="toggleDropdown") Shoping
        .header__dropdown-menu(ref="dropdownMenu")
          .items-wrapper(v-if="productsStore.cart.length")
            cart-item(
              v-for="item in productsStore.cart",
              :key="item.id",
              :product="item",
              @remove-from-cart="productsStore.removeFromCart",
              @add-to-cart="productsStore.addToCart",
              @decrease-quantity="productsStore.decreaseQuantity"
            )
            p.header__amount Total: {{ productsStore.currentCurrency }}{{ productsStore.orderAmount }}
            router-link.header__cart-button(to="/checkout", @click="closeMenu") Go to payment
          .header__dropdown-text(v-else)
            p Your cart is empty
      .header__cart-numbers(v-if="productsStore.cartSize")
        p {{ productsStore.cartSize }}
  dynamic-search(:is-open="isOpenSearchOverlay", @close="toggleSearchOverlay")
</template>
<script lang="ts" setup>
import { ref } from "vue";
import DynamicSearch from "@/components/DynamicSearch.vue";
import { useProductsStore } from "@/store/productsStore";
import { onClickOutside } from "@vueuse/core";
import CartItem from "@/components/CartItem.vue";

const productsStore = useProductsStore();
const isOpenSearchOverlay = ref<boolean>(false);
const dropdownIcon = ref(null);
const dropdownMenu = ref(null);
const isDropdownOpened = ref(false);

const toggleSearchOverlay = () => {
  isOpenSearchOverlay.value = !isOpenSearchOverlay.value;
};
const closeMenu = () => {
  isDropdownOpened.value = false;
};
const toggleDropdown = () => {
  isDropdownOpened.value = !isDropdownOpened.value;
};
onClickOutside(dropdownIcon, closeMenu, {
  ignore: [dropdownMenu],
});
</script>
<style scoped lang="scss">
.header {
  width: 75%;
  padding: 31px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;

  &__amount {
    text-align: right;
    margin-bottom: 15px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__dropdown {
    position: relative;
    &-text {
      padding: 30px;
      text-align: center;
    }
    &-menu {
      display: none;
      &_item {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-color);
        text-align: center;
        border-radius: 12px;
        padding: 18px;
        cursor: pointer;
        border: none;
        background: transparent;
        width: 100%;
      }
    }
    &.opened {
      .header__dropdown-menu {
        display: block;
        position: absolute;
        padding: 10px;
        right: -12px;
        background: var(--white);
        top: calc(100% + 15px);
        border: 1px solid #e3e3e3;
        cursor: default;
        z-index: 1;
        width: 500px;
      }
    }
    &-icon {
      height: 100%;
    }
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

    &-button {
      transition: 0.1s all ease-in-out;
      padding: 10px 15px;
      background-color: var(--black);
      color: var(--white);
      border: none;
      cursor: pointer;
      float: right;
      text-decoration: none;
      &:hover {
        background-color: #333333;
      }
      &:active {
        background-color: #555555;
      }
    }

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
    cursor: pointer;

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
