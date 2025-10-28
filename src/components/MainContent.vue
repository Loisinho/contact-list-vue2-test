<template>
  <main>
    <ContactList
      v-if="!msg.text"
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

<style lang="scss" scoped></style>
