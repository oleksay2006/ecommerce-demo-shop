<template lang="pug">
.card
  .card__wrapper
    img.card__image(:src="require(`@/assets/images/${product.imgName}.png`)")
    .card__text_wrapper
      p.card__title {{ product.title }}
      p.card__category {{ product.type }}
      p.card__price {{ product.currency }}{{ product.price }}
  .card__wrapper
    .card__buttons
      button.card__button(@click="decreaseQuantity") -
      p.card__quantity {{ product.quantity }}
      button.card__button(@click="addToCart") +
    .card__icon(@click="removeFromCart")
</template>
<script lang="ts" setup>
import type { IProduct } from "@/types/entities/IProduct";

interface IProps {
  product: IProduct;
}
interface Emits {
  (e: "remove-from-cart", id: number): void;
  (e: "add-to-cart", id: number): void;
  (e: "decrease-quantity", id: number): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<Emits>();

const removeFromCart = () => {
  emits("remove-from-cart", props.product.id);
};
const addToCart = () => {
  emits("add-to-cart", props.product.id);
};
const decreaseQuantity = () => {
  if (props.product.quantity !== 1) {
    emits("decrease-quantity", props.product.id);
  }
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__button {
    color: var(--white);
    background-color: var(--black);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:first-child {
      padding: 5px 11px;
      margin-right: 7px;
    }
    &:nth-child(3) {
      padding: 5px 10px;
      margin-left: 7px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin-right: 35px;
  }
  &__icon {
    @include icon-mask("cross", 20px, 20px, var(--black));
    cursor: pointer;
  }
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__image {
    width: 70px;
    margin-right: 15px;
  }
  &__title {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__category {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
  &__price {
    @extend .card__title;
    margin-bottom: 0;
  }
}
</style>
