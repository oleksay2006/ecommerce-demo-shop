<template lang="pug">
teleport(to="body")
  transition(name="fade")
    .modal(v-if="isOpen")
      .modal__backdrop(@click="close")
      .modal__container
        slot
</template>
<script lang="ts" setup>
import { watch } from "vue";

interface IProps {
  isOpen: boolean;
}

interface Emits {
  (e: "close"): void;
}

const emits = defineEmits<Emits>();
const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
});
const close = () => {
  emits("close");
};

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
.modal {
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
    width: 75%;
    overflow-y: auto;
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
