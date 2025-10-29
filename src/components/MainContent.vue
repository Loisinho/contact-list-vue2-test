<template>
  <main>
    <div v-if="!msg.text">
      <TheToolbar
        :color="color"
        @search="searchContacts"
      />
      <ContactList
        :color="color"
        :contacts="filteredContacts"
        :sort-options="sortOptions"
        @sort="sortContacts"
      />
    </div>
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
import TheToolbar from "@/components/TheToolbar";
import contacts from "@/services/contacts.js";

export default {
  name: "MainContent",

  components: {
    ContactList,
    TheToolbar
  },

  props: {
    color: {
      type: String,
      default: "indigo"
    }
  },

  data: () => ({
    contacts: [],
    msg: { text: "", type: "info" },
    searchText: "",
    sortOptions: { field: "lastname", direction: "asc" }
  }),

  computed: {
    filteredContacts() {
      if (!this.searchText) {
        return this.contacts;
      }

      const text = this.searchText.toLowerCase();
      return this.contacts.filter((user) => {
        return (
          user.firstname.toLowerCase().includes(text) ||
          user.lastname.toLowerCase().includes(text) ||
          user.email.some(e => e.toLowerCase().includes(text)) ||
          user.phoneNumber.some(p => p.includes(text))
        );
      });
    }
  },

  async created() {
    try {
      this.contacts = await contacts.getData();
      this.sortContacts(this.sortOptions);
    } catch (error) {
      this.msg = { text: error.message, type: "error" };
    }
  },

  methods: {
    searchContacts(text = "") {
      this.searchText = text;
    },

    sortContacts({ field = "", direction = "desc" }) {
      this.contacts.sort((a, b) => {
        const result = a[field].localeCompare(b[field]);
        return direction === "desc" ? result : -result;
      });

      this.sortOptions = { field, direction };
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
