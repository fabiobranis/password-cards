<template>
  <Disclosure as="nav" class="bg-blue-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center basis:1/3">
          <h2 class="text-white font-bold text-lg">Password Cards</h2>
        </div>
        <div class="basis-2/3">
          <slot name="left" />
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue';

</script>
