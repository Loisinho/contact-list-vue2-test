<template>
  <footer :class="`text-${color}-600`">
    Klikin Test 2025
  </footer>
</template>

<script>
export default {
  name: "TheFooter",

  props: {
    color: {
      type: String,
      default: "indigo"
    }
  },

  data: () => ({})
};
</script>

<style lang="scss" scoped>
footer.app__footer {
  padding: var(--app-gap) var(--app-gap) 0;
  width: 100%;
  text-align: center;
}
</style>
