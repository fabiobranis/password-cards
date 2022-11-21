<template>
  <div class="grid grid-cols-1 justify-center content-center p-4
    border-1 border-gray-300 rounded-xl bg-white gap-6 shadow-sm">
    <p class="text-lg font-bold">{{ passwordCard?.name }}</p>
    <div class="flex flex-row content-end">
      <div class="basis-1/2 self-center">
        <p>{{ passwordCard?.url }}</p>
      </div>
      <div class="basis-1/2 flex flex-row justify-end gap-6">
        <button @click="$emit('edit', passwordCard)">
          <WrenchIcon class="block h-6 w-6" />
        </button>
        <button @click="$emit('delete', passwordCard)">
          <TrashIcon class="block h-6 w-6"></TrashIcon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WrenchIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { PasswordCard } from '../types/password-card.type';

defineProps({
  passwordCard: { type: PasswordCard },
});

</script>
