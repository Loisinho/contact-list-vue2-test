<template>
  <main>
    <div v-if="!msg.text">
      <TheToolbar
        :color="color"
        @search="searchContacts"
        @create="handleModal"
      />
      <ContactList
        :color="color"
        :contacts="filteredContacts"
        :sort-options="sortOptions"
        @sort="sortContacts"
        @edit="handleModal"
      />
      <ContactModal
        v-if="modal.show"
        :color="color"
        :show="modal.show"
        :title="modal.title"
        :contact-data="modal.data"
        @close="handleModal"
        @save="saveContact"
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
import ContactModal from "@/components/ContactModal";
import TheToolbar from "@/components/TheToolbar";
import contacts from "@/services/contacts.js";

export default {
  name: "MainContent",

  components: {
    ContactList,
    ContactModal,
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
    msg: {
      text: "",
      type: "info"
    },
    searchText: "",
    modal: {
      show: false,
      title: "Add new contact",
      data: {}
    },
    sortOptions: {
      field: "lastname",
      direction: "asc"
    }
  }),

  computed: {
    filteredContacts() {
      if (!this.searchText) {
        return this.contacts;
      }

      const text = this.searchText.toLowerCase();
      return this.contacts.filter((contact) => {
        return (
          contact.firstname.toLowerCase().includes(text) ||
          contact.lastname.toLowerCase().includes(text) ||
          contact.email.some(e => e.toLowerCase().includes(text)) ||
          contact.phoneNumber.some(p => p.includes(text))
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

    handleModal({ show = false, title = "Add new contact", data = null }) {
      this.modal = {
        show,
        title,
        data
      };
    },

    saveContact(contactData) {
      if (!contactData.id) {
        contactData.id = this.contacts.length
          ? Math.max(...this.contacts.map((c) => c.id)) + 1
          : 1;
        this.contacts.push(contactData);
      } else {
        const index = this.contacts.findIndex((c) => c.id === contactData.id);
        if (index !== -1) {
          this.contacts.splice(index, 1, { ...this.contacts[index], ...contactData });
        }
      }

      this.modal.show = false;
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
