<template>
  <div>
    {{ contacts }}
  </div>
</template>

<script>
export default {
  name: "ContactList",
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
