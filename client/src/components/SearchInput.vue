<template>
  <input type="text" :name="name" :placeholder="placeholder" :id="id" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" :class="inputCssClasses" />
</template>

<script setup>
import { ref } from 'vue';

defineEmits(['update:modelValue']);
defineProps({
  id: String,
  name: String,
  modelValue: String,
  placeholder: String,
});

const inputCssClasses = ref({
  'mt-1': true,
  block: true,
  'w-full': true,
  'rounded-md': true,
  'shadow-sm': true,
  'focus:border-indigo-500': true,
  'focus:ring-indigo-500': true,
  'sm:text-sm': true,
  'border-gray-300': true,
});

</script>
