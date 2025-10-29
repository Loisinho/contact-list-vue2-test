<template>
  <main>
    <ContactList
      v-if="!msg.text"
      :color="color"
      :contacts="contacts"
    />
    <div
      v-else
      :class="`app__msg app__msg--${msg.type}`"
    >
      {{ msg.text }}
    </div>
  </main>
</template>

<script>
import ContactList from "@/components/ContactList";
import contacts from "@/services/contacts.js";

export default {
  name: "App",
  components: {
    ContactList
  },

  props: {
    color: {
      type: String,
      default: "indigo"
    }
  },

  data: () => ({
    contacts: [],
    msg: { text: "", type: "info" }
  }),

  async created() {
    try {
      this.contacts = await contacts.getData();
    } catch (error) {
      this.msg = { text: error.message, type: "error" };
    }
  }
};
</script>

<style lang="scss" scoped>
main.app__content {
  flex: 1;
  padding: var(--app-gap);

  & > .app__msg {
    width: 80%;
    padding: var(--app-padding);
    margin: calc(var(--app-gap) * 4) 10%;
    border: 1px solid var(--color-border);
    border-radius: var(--app-radius);

    &.app__msg--error {
      color: var(--color-error);
      border-color: var(--color-error);
    }
  }
}
</style>
