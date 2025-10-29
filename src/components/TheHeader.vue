<template>
  <header :class="`bg-${color}-600 text-white`">
    <h1 class="header__title">
      Klikin Contact List Test
    </h1>
    <p class="header__info">
      Basic app to manage contacts
    </p>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

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
header.app__header {
	padding: calc(var(--app-gap) * 2) var(--app-gap) var(--app-gap);
}
</style>
