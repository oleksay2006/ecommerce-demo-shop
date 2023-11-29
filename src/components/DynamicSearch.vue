<template lang="pug">
app-modal(:is-open="isOpen", @close="close")
  .overlay__wrapper
    .overlay__arrow-icon(@click="close")
    .overlay__arrow-search
    input.overlay__input
</template>
<script lang="ts" setup>
import AppModal from "@/components/AppModal.vue";

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

const close = (): void => {
  emits("close");
};
</script>
<style lang="scss" scoped>
.overlay {
  &__input {
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--white);
    font-family: "Open Sans", sans-serif;
  }

  &__wrapper {
    padding: 50px 0 15px;
    width: 68%;
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
