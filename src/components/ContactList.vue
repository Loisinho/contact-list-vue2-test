<template>
  <div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr :class="`text-left border-0 border-b border-solid border-${color}-400`">
            <th class="p-3 font-semibold">
              Name
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
              {{ contact.firstname }} {{ contact.lastname }}
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
    }
  },

  data: () => ({}),

  methods: {
    editContact(id) {
      return id;
    }
  }
};
</script>

<style lang="scss" scoped></style>
