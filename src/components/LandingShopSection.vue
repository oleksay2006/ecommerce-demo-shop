<template lang="pug">
section.page__wrapper
  .page
    .page__filters(role="filters")
      p.page__filters-item--active All Products
      p.page__filters-item T-Shirt
      p.page__filters-item Hoodies
      p.page__filters-item Jacket
    .page__list
      product-card(
        v-for="product in productsList",
        :key="product.title",
        :product="product",
        @add-to-favourite="addToFavourite",
        @remove-from-favourite="removeFromFavourite",
        @toggle-product-gallery="toggleProductGallery",
        @add-to-cart="addToCart"
      )
  image-gallery(
    :is-open="isOpenProductGallery",
    :img-name="imgNameForGallery",
    @close="toggleProductGallery"
  )
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useProductsStore } from "@/store/productsStore";
import ImageGallery from "@/components/ImageGallery.vue";
import ProductCard from "@/components/ProductCard.vue";

const { productsList, addToFavourite, removeFromFavourite, addToCart } =
  useProductsStore();
const isOpenProductGallery = ref<boolean>(false);
const imgNameForGallery = ref<string>("");

const toggleProductGallery = (imgName?: string) => {
  if (imgName) {
    imgNameForGallery.value = imgName;
  }
  isOpenProductGallery.value = !isOpenProductGallery.value;
};
</script>
<style lang="scss" scoped>
@keyframes shopCart {
  50% {
    transform: translate(50%, 50%);
  }
  100% {
    transform: translate(50%, 70%);
  }
}

.page {
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  &__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 373px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 35px;

    &-item {
      cursor: pointer;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.5);
      font-family: "Open Sans", sans-serif;

      &--active {
        @extend .page__filters-item;
        color: var(--black);
      }
    }
  }

  &__wrapper {
    position: relative;
    width: 100%;
    background-color: #ffffff;
    padding-top: 125px;
    padding-bottom: 120px;
  }
}
</style>
