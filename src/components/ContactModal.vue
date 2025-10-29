<template>
  <div
    class="contactmodal fixed inset-0 z-50 bg-black bg-opacity-50"
    :class="[show? 'flex items-center justify-center' : 'hidden']"
  >
    <div class="relative w-full max-w-md p-6 rounded-xl bg-white">
      <XIcon
        class="absolute top-3 right-3 cursor-pointer"
        :class="`text-${color}-600 hover:text-${color}-300`"
        size="1.5x"
        @click="$emit('close', { show: false })"
      />

      <h2
        class="text-xl font-semibold mb-4"
        :class="`text-${color}-600`"
      >
        {{ title }}
      </h2>

      <div class="flex flex-col gap-4">
        <input
          v-model="newContactData.firstname"
          type="text"
          name="firstname"
          placeholder="Name"
          title="Name"
          class="border rounded-full border-gray-200 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2"
          :class="`focus:ring-${color}-600`"
          required
        >
        <input
          v-model="newContactData.lastname"
          type="text"
          name="lastname"
          placeholder="Last Name"
          title="Last Name"
          class="border rounded-full border-gray-200 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2"
          :class="`focus:ring-${color}-600`"
        >
        <input
          v-model="newContactData.phoneNumber[0]"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          title="Phone Number"
          class="border rounded-full border-gray-200 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2"
          :class="`focus:ring-${color}-600`"
        >
        <input
          v-model="newContactData.email[0]"
          type="email"
          name="email"
          placeholder="Email"
          title="Email"
          class="border rounded-full px-4 py-2 focus:outline-none focus:ring-2"
          :class="[
            `focus:ring-${color}-600`,
            emailError ? 'border-red-600 bg-red-100' : 'border-gray-200 bg-gray-100'
          ]"
        >

        <div class="flex justify-end gap-3 mt-2">
          <button
            type="button"
            class="px-4 py-2 border rounded-full border-gray-100 hover:bg-gray-100 cursor-pointer transition"
            @click="$emit('close', { show: false })"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded-full text-white cursor-pointer transition"
            :class="`bg-${color}-600 hover:bg-${color}-300`"
            @click="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactModal",

	props: {
    color: {
      type: String,
      default: "indigo"
    },
		show: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
      default: "Add new contact"
		},
		contactData: {
			type: Object,
			default: () => {}
		}
  },

	data: () => ({
		emailError: "",
		newContactData: {
			id: 0,
			firstname: "",
			lastname: "",
			phoneNumber: [],
			email: []
		}
	}),

	created() {
		if (this.contactData && this.contactData.id) {
			this.newContactData = { ...this.contactData };
		}
	},

	methods: {
		save() {
			this.validateEmail();
			if (!this.emailError) {
				this.$emit('save', this.newContactData);
			}
		},

		validateEmail() {
			const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
				this.newContactData.email[0] &&
				!pattern.test(this.newContactData.email[0])
			) {
        this.emailError = 'Email is not valid';
      } else {
        this.emailError = '';
      }
		}
	}
}
</script>

<style lang="scss" scoped></style>
