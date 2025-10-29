<template>
  <div class="contactslist">
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr :class="`text-left border-0 border-b border-solid border-${color}-400`">
            <th class="p-3">
              <div
                class="flex items-center justify-between font-semibold cursor-pointer"
                @click="sortContacts('firstname', sortOptions.direction === 'asc'? 'desc': 'asc')"
              >
                Firstname
                <ChevronUpIcon
                  v-if="sortOptions.field === 'firstname' && sortOptions.direction === 'asc'"
                  class="contactslist__sort contactslist__sort--active"
                  size="1x"
                />
                <ChevronDownIcon
                  v-else
                  class="contactslist__sort"
                  :class="{'contactslist__sort--active': sortOptions.field === 'firstname'}"
                  size="1x"
                />
              </div>
            </th>
            <th class="p-3">
              <div
                class="flex items-center justify-between font-semibold cursor-pointer"
                @click="sortContacts('lastname', sortOptions.direction === 'asc'? 'desc': 'asc')"
              >
                Lastname
                <ChevronUpIcon
                  v-if="sortOptions.field === 'lastname' && sortOptions.direction === 'asc'"
                  class="contactslist__sort contactslist__sort--active"
                  size="1x"
                />
                <ChevronDownIcon
                  v-else
                  class="contactslist__sort"
                  :class="{'contactslist__sort--active': sortOptions.field === 'lastname'}"
                  size="1x"
                />
              </div>
            </th>
            <th class="p-3 font-semibold">
              Phones
            </th>
            <th class="p-3 font-semibold">
              Emails
            </th>
            <th class="p-3 text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="contact in contacts"
            :key="contact.id"
            :class="`text-left border-0 border-b border-solid border-${color}-200 hover:bg-gray-100`"
          >
            <td class="p-3 font-semibold">
              {{ contact.firstname }}
            </td>
            <td class="p-3 font-semibold">
              {{ contact.lastname }}
            </td>
            <td class="p-3">
              <div
                v-for="phoneNumber in contact.phoneNumber"
                :key="phoneNumber"
              >
                {{ phoneNumber }}
              </div>
            </td>
            <td class="p-3">
              <div
                v-for="email in contact.email"
                :key="email"
              >
                {{ email }}
              </div>
            </td>
            <td class="p-3 text-center">
              <PencilIcon
                :class="`text-${color}-600 hover:text-${color}-300 transition cursor-pointer`"
                size="1.4x"
                title="Edit"
                @click="editContact(contact.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactList",

  props: {
    color: {
      type: String,
      default: "indigo"
    },
    contacts: {
      type: Array,
      required: true
    },
    sortOptions: {
      type: Object,
      required: true
    }
  },

  data: () => ({}),

  methods: {
    editContact(id) {
      return id;
    },

    sortContacts(field="", direction="desc") {
      this.$emit('sort', { field, direction });
    }
  }
};
</script>

<style lang="scss" scoped>
.contactslist {
  .contactslist__sort {
    opacity: 40%;

    &.contactslist__sort--active {
      opacity: initial;
    }
  }
}
</style>
