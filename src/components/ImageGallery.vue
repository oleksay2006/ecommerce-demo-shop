<template lang="pug">
transition(name="fade")
  .gallery(v-if="isOpen")
    .gallery__backdrop
    .gallery__container
      img(
        ref="imageRef",
        :src="require(`@/assets/images/${imgName}.png`)",
        alt="Product Preview"
      )
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

interface IProps {
  isOpen: boolean;
  imgName: string;
}
interface Emits {
  (e: "close"): void;
}

const emits = defineEmits<Emits>();
const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
  imgName: "",
});
const imageRef = ref(null);

const close = () => {
  emits("close");
};
onClickOutside(imageRef, () => close());

watch(
  () => props.isOpen,
  (newV) => {
    if (newV) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.gallery {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;

  &__backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--black);
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  &__container {
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 11;
  }

  &__wrapper {
    position: relative;
    background-color: var(--white);
    border-radius: 12px;
    padding: 10px;
  }

  &__close {
    position: absolute;
    top: 24px;
    right: 40px;
    z-index: 9;
    display: flex;
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
