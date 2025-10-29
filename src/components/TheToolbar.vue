<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <div class="relative w-full">
        <input
          autofocus
          type="text"
          name="search"
          title="Search contact"
          placeholder="Search contact.."
          class="w-full border rounded-full border-gray-200 py-2 pr-4 pl-10 placeholder-gray-400 focus:outline-none focus:ring-2"
          :class="`focus:ring-${color}-600`"
          @input="$emit('search', $event.target.value)"
        >
        <SearchIcon
          class="absolute left-2.5 top-2"
          :class="`text-${color}-600`"
          size="1.2x"
        />
      </div>

      <button 
        class="w-full sm:w-auto text-white px-4 py-2 border rounded-full border-gray-200 transition cursor-pointer"
        :class="`bg-${color}-600 hover:bg-${color}-300`"
        title="Add new contact"
        @click="$emit('create', { show: true, title: 'Add new contact', data: null })"
      >
        <UserAddIcon size="1.2x" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheToolbar",

	props: {
    color: {
      type: String,
      default: "indigo"
    }
  }
}
</script>

<style lang="scss" scoped></style>
