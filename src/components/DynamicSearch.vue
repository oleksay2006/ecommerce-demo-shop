<template lang="pug">
app-modal(:is-open="isOpen", @close="close")
  .overlay__wrapper
    .overlay__search-wrapper
      .overlay__arrow-icon(@click="close")
      .overlay__arrow-search
      input.overlay__input(
        v-model="searchValue",
        role="search",
        aria-label="Overlay search"
      )
    .overlay__empty-search(
      v-if="searchValue.length && !productsFromSearch.length"
    )
      p We can't find anything for your request
    .overlay__products-wrapper(v-else)
      .overlay__product(
        v-for="(product, index) in productsFromSearch",
        :key="index"
      )
        figure
          img.product__image(
            :src="getImage(product.imgName)",
            alt="Product image"
          )
        .product__text-wrapper
          h3.product__text-title {{ product.title }}
          .product__text-category-and-price
            p.product__text-category {{ product.type }}
            p.product__text-price {{ product.price }}
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import AppModal from "@/components/AppModal.vue";
import type { IProduct } from "@/types/entities/IProduct";
import { useDebounceFn } from "@vueuse/core";
import { useProductsStore } from "@/store/productsStore";

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: "close"): void;
}

withDefaults(defineProps<Props>(), {
  isOpen: false,
});
const emits = defineEmits<Emits>();
const { productsList } = useProductsStore();
const productsFromSearch = ref<IProduct[]>(productsList);
const searchValue = ref<string>("");

const close = (): void => {
  emits("close");
};
const getImage = (imgName: string) => {
  return require(`@/assets/images/${imgName}.png`);
};

const debouncedFn = useDebounceFn((searchValue: string) => {
  productsFromSearch.value = productsList.filter((product) =>
    product.title.includes(searchValue)
  );
}, 500);
watch(
  () => searchValue.value,
  (newV) => {
    debouncedFn(newV);
  }
);
</script>
<style lang="scss" scoped>
.product {
  &__text {
    &-category {
      font-weight: 400;
    }

    &-category-and-price {
      display: flex;
      justify-content: space-between;
    }

    &-title {
      margin-bottom: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-wrapper {
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: 600;
      padding: 0 10px;
      color: var(--white);
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 18px;
  }
}

.overlay {
  &__empty-search {
    margin-top: 15%;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: var(--white);
  }

  &__product {
    min-width: 25%;
    max-width: 25%;
  }

  &__input {
    width: 50%;
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--white);
    font-family: "Open Sans", sans-serif;
  }

  &__products-wrapper {
    padding-bottom: 40px;
    overflow-y: hidden;
    overflow-x: auto;
    margin-top: 78px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  &__search-wrapper {
    padding: 50px 0 15px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ffffff;
  }

  &__arrow-icon {
    @include icon-mask("arrow", 24px, 24px, var(--white));
    margin-right: 16px;
    cursor: pointer;
  }

  &__arrow-search {
    @include icon-mask("search", 24px, 24px, var(--white));
    margin-right: 16px;
    cursor: pointer;
  }
}
</style>
