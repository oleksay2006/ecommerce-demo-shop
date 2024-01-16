<template lang="pug">
.card__wrapper
  span.card--sale(v-if="product.isOnSale") SALE
  span.card--hot(v-if="product.isHot") HOT
  figure
    img.card__image(:src="require(`@/assets/images/${product.imgName}.png`)")
  .hover-block
    .hover-block__icons(v-if="!isOverlay")
      .hover-block__favourite(@click="animateFavourite")
        .line
        .line
        .line
        .line
        .line
        .line
        .line
        .line
        .heart(ref="heartIcon", :class="{ love: product.isFavourite }")
      .hover-block__search(@click="toggleProductGallery(product.imgName)")
    .hover-block__shop(@click="addToCart")
      .hover-block__cart
      p.hover-block__shop-text Shop Now
  .card__text_wrapper
    h3.card__text_title {{ product.title }}
    .card__text_bottom
      p.card__text--gray {{ product.type }}
      .card__price
        p.card__text_price(
          :class="{ 'card__text_price--discounted': product.discount }"
        ) {{ product.currency }}{{ product.price }}
        p.card__text_discount(v-if="product.discount") $155
</template>
<script lang="ts" setup>
import { type IProduct } from "@/types/entities/IProduct";
import { ref } from "vue";

interface IProps {
  product: IProduct;
  isOverlay?: boolean;
}
interface Emits {
  (e: "toggle-product-gallery", imgName: string): void;
  (e: "remove-from-favourite", id: number): void;
  (e: "add-to-favourite", id: number): void;
  (e: "add-to-cart", id: number): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<Emits>();
const heartIcon = ref<HTMLElement>();

const addToCart = () => {
  emits("add-to-cart", props.product.id);
};
const toggleProductGallery = (imgName: string) => {
  emits("toggle-product-gallery", imgName);
};
const animateFavourite = () => {
  if (heartIcon.value) {
    if (props.product.isFavourite) {
      emits("remove-from-favourite", props.product.id);
    } else {
      emits("add-to-favourite", props.product.id);
    }

    heartIcon.value.classList.toggle("love");

    const linesAndHearts = document.querySelectorAll(".line, .heart");

    linesAndHearts.forEach((elem) => {
      elem.classList.add("active");
    });

    setTimeout(() => {
      linesAndHearts.forEach((elem) => {
        elem.classList.remove("active");
      });
    }, 300);
  }
};
</script>
<style scoped lang="scss">
$size: 25px;
$width: $size/2;

@keyframes line1 {
  0% {
    opacity: 1;
  }
  25% {
    top: -$size/4;
  }
  65% {
    height: $size/2;
  }
  100% {
    height: $size/50;
    top: -$size;
  }
}

@keyframes grow-shrink {
  40% {
    transform: scale(1.1) rotate(-45deg);
  }
  75% {
    transform: scale(0.9) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(-45deg);
  }
}

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
    cursor: pointer;

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
    height: $size;
    width: $size;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;

    .line {
      @for $i from 1 through 8 {
        &:nth-of-type(#{$i}) {
          transform: rotate(#{360/8 * ($i - 1)}deg);
        }
      }
      margin: $size/2;

      &.active:before {
        content: "";
        height: $size/2;
        width: $size/45;
        background: red;
        position: absolute;
        top: -$size/4;
        left: -$size/50/2;
        will-change: top, height;
        animation: line1 0.3s ease-out 1;
      }
    }

    .heart {
      background-color: var(--white);
      width: $width;
      height: $width;
      margin: auto;
      position: absolute;
      top: $width/4;
      bottom: 0;
      left: 0;
      right: 0;
      transform: rotate(-45deg);

      &:before,
      &:after {
        content: "";
        width: $width;
        height: $width;
        border-radius: 50%;
        background-color: var(--white);
        position: absolute;
      }

      &:before {
        top: -$width / 2;
        left: 0;
      }

      &:after {
        top: 0;
        left: $width / 2;
      }

      &.love {
        background: #f80808;

        &:before,
        &:after {
          background: #f80808;
        }
      }

      &.active {
        animation: grow-shrink 0.3s ease 1;
      }
    }
  }

  &__search {
    @include icon-mask("search", 25px, 25px, var(--white));
    margin-left: 46px;
    cursor: pointer;
  }

  &__cart {
    @include icon-mask("cart", 25px, 25px, var(--white));
    margin-right: 8px;
    cursor: pointer;
  }
}

.card {
  &__price {
    display: flex;
    align-items: center;
  }
  &__text {
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &_price {
      @extend .card__text_title;
      margin-bottom: 0;
      &--discounted {
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 12px;
        margin-bottom: 0;
      }
    }

    &_discount {
      @extend .card__text_price;
      color: #ff6f61;
    }

    &_wrapper {
      padding: 0 10px;
    }
  }

  &--sale {
    background-color: var(--black);
    color: var(--white);
    position: absolute;
    top: 22px;
    padding: 4px 12px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: 600;
  }

  &--hot {
    @extend .card--sale;
    background-color: #ff6f61;
  }

  &__image {
    width: 100%;
    margin-bottom: 18px;
  }

  &__wrapper {
    position: relative;
    width: 22%;

    &:hover {
      .hover-block {
        opacity: 1;
      }
    }
  }
}
</style>
