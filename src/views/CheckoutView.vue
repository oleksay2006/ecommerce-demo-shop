<template lang="pug">
.page__wrapper
  .items-wrapper(v-if="productsStore.cartSize")
    p.page__title Order summary
    cart-item(
      v-for="item in productsStore.cart",
      :key="item.id",
      :product="item",
      @remove-from-cart="productsStore.removeFromCart",
      @add-to-cart="productsStore.addToCart",
      @decrease-quantity="productsStore.decreaseQuantity"
    )
    p.page__amount Total: {{ productsStore.currentCurrency }}{{ productsStore.orderAmount }}
    .page__payment
      p.page__hint No payment, because this is demo project
      button.page__payment-button Go to payment
  .checkout__wrapper(v-if="productsStore.cartSize")
    p.page__title Order details
    p.page__small-text Taxes 5%
    p.page__small-text Discount {{ productsStore.currentCurrency }}{{ activatedCoupon ? 0.15 * productsStore.orderAmount : 0 }} <span v-if="activatedCoupon">({{ activatedCoupon }} 15%)</span>
    p.page__small-text Total amount: {{ productsStore.currentCurrency }}{{ activatedCoupon ? (productsStore.orderAmount * 0.05 + productsStore.orderAmount - 0.15 * productsStore.orderAmount).toFixed(2) : (productsStore.orderAmount * 0.05 + productsStore.orderAmount).toFixed(2) }}
    .page__discount-wrapper
      input.page__discount-field(
        placeholder="Enter coupon",
        v-model="couponValue",
        :disabled="activatedCoupon.length",
        :class="{ 'page__discount-field--error': !isCouponActivated, 'page__discount-field--disabled': activatedCoupon }"
      )
      button.page__discount-button(
        @click="applyCoupon",
        :class="{ 'page__discount-button--disabled': !couponValue.length }"
      ) Apply
    p.page__hint Enter, for example, valid coupon UDGJWSBE and invalid WGT52H1F. (1 coupon for order)
  p.page--empty(v-else) Your cart is empty
</template>
<script lang="ts" setup>
import { ref } from "vue";
import CartItem from "@/components/CartItem.vue";
import { useProductsStore } from "@/store/productsStore";

const activeCoupons = ref<string[]>(["UDGJWSBE"]);
const productsStore = useProductsStore();
const couponValue = ref<string>("");
const isCouponActivated = ref<boolean>(true);
const activatedCoupon = ref<string>("");

const applyCoupon = () => {
  if (couponValue.value) {
    if (activeCoupons.value.includes(couponValue.value)) {
      isCouponActivated.value = true;
      activatedCoupon.value = couponValue.value;
      couponValue.value = "";
    } else {
      isCouponActivated.value = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.items {
  &-wrapper {
    width: 40%;
    border: 1px solid #e3e3e3;
    padding: 15px;
    height: max-content;
  }
}

.checkout {
  &__wrapper {
    @extend .items-wrapper;
    width: 25%;
  }
}

.page {
  &__discount {
    &-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &-field {
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #e3e3e3;
      outline: none;
      &--error {
        border-color: #f80808;
      }
    }
    &-button {
      transition: 0.1s all ease-in-out;
      padding: 10px 25px;
      background-color: var(--black);
      color: var(--white);
      border: none;
      cursor: pointer;
      border-radius: 8px;
      &:hover {
        background-color: #333333;
      }
      &:active {
        background-color: #555555;
      }
      &--disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
        &:hover {
          background-color: #d3d3d3;
        }
        &:active {
          background-color: #d3d3d3;
        }
      }
    }
  }
  &__payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-button {
      @extend .page__discount-button;
      background-color: #d3d3d3;
      height: 50px;
      border-radius: 0;
      cursor: not-allowed;

      &:hover {
        background-color: #d3d3d3;
      }

      &:active {
        background-color: #d3d3d3;
      }
    }
  }
  &__small-text {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    &:nth-child(4) {
      margin-bottom: 15px;
    }
  }
  &__hint {
    @extend .page__small-text;
    font-size: 12px;
    margin-bottom: 0;
    line-height: 20px;
  }
  &__wrapper {
    width: 100%;
    padding: 50px 150px;
    display: flex;
    justify-content: space-between;
  }
  &__amount {
    text-align: right;
    margin-bottom: 45px;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__title {
    @extend .page__amount;
    text-align: left;
    font-size: 25px;
  }
}
</style>
