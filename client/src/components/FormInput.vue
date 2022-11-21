<template>
  <div class="col-span-6 sm:col-span-4">
    <div class="flex items-end">
      <label :for="id" :class="labelCssClasses" v-show="!!label">
        {{ label }}
      </label>
      <EyeIcon class="block h-6 w-6 justify-self-end cursor-pointer basis-1/12" v-show="isPassword && !isToShowPassword"
        @click="type = 'text'" />
      <EyeSlashIcon class="block h-6 w-6 justify-self-end cursor-pointer basis-1/12"
        v-show="isPassword && isToShowPassword" @click="type = 'password'" />
      <ClipboardIcon class="block h-6 w-6 justify-self-end cursor-pointer basis-1/12" v-show="allowCopy"
        @click="onCopy" />
    </div>
    <p class="text-sm text-red-500" v-show="error.isErrored">{{ error.message }}</p>
    <input :type="type" :name="name" :id="id" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" :class="inputCssClasses" />
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
import { ref, computed } from 'vue';

defineEmits(['update:modelValue']);

const props = defineProps({
  id: String,
  name: String,
  label: String,
  isPassword: {
    type: Boolean,
    default: false,
  },
  modelValue: String,
  error: {
    isErrored: Boolean,
    message: String,
  },
  allowCopy: {
    type: Boolean,
    default: false,
  },
});

const onCopy = () => {
  navigator.clipboard.writeText(props.modelValue);
};

const type = ref(props.isPassword ? 'password' : 'text');

const labelCssClasses = computed(() => ({
  block: true,
  'text-sm': true,
  'font-medium': true,
  'text-red-700': props.error.isErrored,
  'text-gray-700': !props.error.isErrored,
  'basis-10/12': true,
}));

const inputCssClasses = computed(() => ({
  'mt-1': true,
  block: true,
  'w-full': true,
  'rounded-md': true,
  'shadow-sm': true,
  'focus:border-indigo-500': true,
  'focus:ring-indigo-500': true,
  'sm:text-sm': true,
  'border-red-300': props.error.isErrored,
  'border-gray-300': !props.error.isErrored,
}));

const isToShowPassword = computed(() => props.isPassword && type.value === 'text');

</script>
