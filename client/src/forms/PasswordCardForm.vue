<template>
  <div class="mt-5 md:col-span-2 md:mt-0">
    <div class="overflow-hidden shadow sm:rounded-md">
      <h3 class="text-lg font-bold text-center">Password Card</h3>
      <div class="bg-white px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-6">
          <FormInput id="card-name" label="Name" name="card-name" v-model="passwordCard.name" :error="errors.name" />
          <FormInput id="card-url" label="URL" name="card-url" v-model="passwordCard.url" :error="errors.url" />
          <FormInput id="user-name" label="User Name" name="user-name" v-model="passwordCard.userName"
            :error="errors.userName" />
          <FormInput id="user-password" label="User Password" name="user-password" is-password
            v-model="passwordCard.password" :error="errors.password" allow-copy />
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 text-right sm:px-6 flex flex-row justify-around">
        <button class="justify-center rounded-md border border-transparent bg-red-600
          py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none
          focus:ring-2 focus:ring-red-500 focus:ring-offset-2" @click="close">Exit</button>
        <button class="justify-center rounded-md border border-transparent bg-blue-600
          py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" @click="submit">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormInput from '../components/FormInput.vue';
import { PasswordCard } from '../types/password-card.type';
import { upsert } from '../utils/client';
import { httpValidationErrorsParser } from '../utils/http-validation-errors.parser';

const defaultErrorState = {
  url: {
    isErrored: false,
    message: '',
  },
  name: {
    isErrored: false,
    message: '',
  },
  userName: {
    isErrored: false,
    message: '',
  },
  password: {
    isErrored: false,
    message: '',
  },
};

const emit = defineEmits(['close']);
const props = defineProps({
  id: String || undefined,
  formData: PasswordCard,
  endpoint: String,
});

const passwordCard = ref(props.formData ?? PasswordCard.createDefaults());
const errors = ref(defaultErrorState);

const close = () => {
  emit('close');
};

const submit = async () => {
  errors.value = defaultErrorState;

  const { id, ...body } = passwordCard.value;
  const response = await upsert({
    body,
    endpoint: props.endpoint,
    param: id,
  });

  if (response.status === 200) {
    close();
    return;
  }

  const { errors: errorsFromApi } = await response.json();
  errors.value = httpValidationErrorsParser(errorsFromApi, defaultErrorState);
};

</script>
