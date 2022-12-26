<template>
  <div>
    <div class="icon-text-element">
      <slot></slot>
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'text'
  ],
  name: "IconText"
}
</script>

<style lang="scss">

.icon-text-element {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  svg {
    fill: var(--text-color-primary);
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }

  .text {
    font-size: 1.25rem;
    color: var(--text-color-primary);
  }
}
</style>
