<template>
  <div class="fixed z-90 top-10 left-8 flex w-96 shadow-lg rounded-lg">
    <div :class="containerCssClass">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" viewBox="0 0 16 16" width="20"
        height="20">
        <path v-show="!isError" fill-rule="evenodd"
          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z">
        </path>
        <path v-show="isError" fill-rule="evenodd"
          d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z">
        </path>
      </svg>
    </div>
    <div
      class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
      <slot />
      <button @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20"
          height="20">
          <path fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineEmits(['close']);

const props = defineProps({ isError: Boolean });

const containerCssClass = ref({
  'bg-green-500': !props.isError,
  'bg-red-500': props.isError,
  'py-4': true,
  'px-6': true,
  'rounded-l-lg': true,
  flex: true,
  'items-center': true,
});

</script>
