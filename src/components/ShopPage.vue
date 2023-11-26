<template lang="pug">
section.page__wrapper
  .page
    .page__filters
      p.page__filters-item--active All Products
      p.page__filters-item T-Shirt
      p.page__filters-item Hoodies
      p.page__filters-item Jacket
    .page__list
      .list__item-wrapper(v-for="product in products")
        .list__item-sale(v-if="product.isOnSale") SALE
        .list__item-hot(v-if="product.isHot") HOT
        img.list__item-image(:src="getImage(product.imgName)")
        .hover-block
          .hover-block__icons
            .hover-block__favourite
            .hover-block__search
          .hover-block__shop
            .hover-block__cart
            p.hover-block__shop-text Shop Now
        .list__item-text_wrapper
          .list__item-text_title {{ product.title }}
          .list__item-text_bottom
            p.list__item-text--gray {{ product.type }}
            p.list__item-text_price {{ product.price }}
</template>
<script lang="ts" setup>
import { ref } from "vue";

const products = ref([
  {
    title: "Adicolor Classics Joggers",
    imgName: "image-product-1",
    type: "Dress",
    price: "$63.85",
    isOnSale: false,
    isHot: false,
  },
  {
    title: "Adicolor Classics Joggers",
    imgName: "image-product-2",
    type: "Dress",
    price: "$63.85",
    isOnSale: false,
    isHot: false,
  },
  {
    title: "Adicolor Classics Joggers",
    imgName: "image-product-3",
    type: "Dress",
    price: "$63.85",
    discount: "20%",
    isOnSale: true,
    isHot: false,
  },
  {
    title: "Adicolor Classics Joggers",
    imgName: "image-product-4",
    type: "Dress",
    price: "$63.85",
    isOnSale: false,
    isHot: true,
  },
]);

const getImage = (imgName: string) => {
  return require(`@/assets/images/${imgName}.png`);
};
</script>
<style lang="scss" scoped>
.hover-block {
  opacity: 0;
  width: 100%;
  height: 55px;
  padding: 15px 14px;
  position: absolute;
  bottom: 91px;
  background-color: var(--black);
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__shop {
    display: flex;
    align-items: center;

    &-text {
      font-size: 18px;
      font-weight: 400;
      color: var(--white);
    }
  }

  &__icons {
    display: flex;
  }

  &__favourite {
    @include icon-mask("favourite", 25px, 25px, var(--white));
    margin-right: 21px;
    cursor: pointer;
  }

  &__search {
    @include icon-mask("search", 25px, 25px, var(--white));
    cursor: pointer;
  }

  &__cart {
    @include icon-mask("cart", 25px, 25px, var(--white));
    margin-right: 8px;
    cursor: pointer;
  }
}

.list {
  &__item {
    &-text {
      &_price {
        @extend .list__item-text_title;
        margin-bottom: 0;
      }

      &--gray {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }

      &_bottom {
        display: flex;
        justify-content: space-between;
      }

      &_title {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 16px;
      }

      &_wrapper {
        padding: 0 10px;
      }
    }

    &-sale {
      background-color: var(--black);
      color: var(--white);
      position: absolute;
      top: 22px;
      padding: 4px 12px;
      font-family: "Open Sans", sans-serif;
      font-size: 12px;
      font-weight: 600;
    }

    &-hot {
      @extend .list__item-sale;
      background-color: #ff6f61;
    }

    &-image {
      width: 100%;
      margin-bottom: 18px;
    }

    &-wrapper {
      position: relative;
      width: 22%;

      &:hover {
        .hover-block {
          opacity: 1;
        }
      }
    }
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
