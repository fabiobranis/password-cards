<template>
  <FloatingAlert is-error v-show="deleteError" @close="deleteError = false">
    <p class="text-bold">Error while deleting Password Card!</p>
  </FloatingAlert>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <template v-for="passwordCard in activeCards" :key="passwordCard.id">
      <PasswordCardItem
        :passwordCard="passwordCard"
        @edit="onEditCard"
        @close="updateList"
        @delete="onDeleteCard"
      />
    </template>
  </div>
  <ModalWindow :open="passwordModalOpen">
    <PasswordCardForm
      @close="updateList"
      :formData="activePasswordCard"
      :id="currentId"
      :endpoint="endpoint"
    />
  </ModalWindow>
  <ModalWindow :open="confirmDeleteModalOpen">
    <ConfirmationDialog
      :contextObject="activePasswordCard"
      :question="deleteQuestion"
      title="Delete Password Card"
      @confirm="confirmDeleteCard"
      @cancel="updateList"
    />
  </ModalWindow>
  <FAB :clicked="() => passwordModalOpen = true"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import FAB from '../components/FAB.vue';
import ModalWindow from '../components/ModalWindow.vue';
import PasswordCardItem from '../components/PasswordCardItem.vue';
import PasswordCardForm from '../forms/PasswordCardForm.vue';
import ConfirmationDialog from '../components/ConfirmationDialog.vue';
import { PasswordCard } from '../types/password-card.type';
import { del } from '../utils/client';
import FloatingAlert from '../components/FloatingAlert.vue';
import { usePasswordCardsStore } from '../stores/password-cards.store';

const endpoint = ref('password-cards');
const store = usePasswordCardsStore();
const { activeCards } = storeToRefs(store);
const { fetchCards } = store;

const passwordModalOpen = ref(false);
const confirmDeleteModalOpen = ref(false);
const deleteError = ref(false);
const currentId = ref('');
const deleteQuestion = ref('');
const activePasswordCard = ref(PasswordCard.createDefaults());

const buildDeleteQuestion = ({ name }) => [
  'Are you sure you want to delete the password card named',
  name,
  '?']
  .join(' ');

const clearContextData = () => {
  passwordModalOpen.value = false;
  confirmDeleteModalOpen.value = false;
  deleteQuestion.value = '';
  deleteError.value = false;
  currentId.value = undefined;
  activePasswordCard.value = PasswordCard.createDefaults();
};

const updateList = async () => {
  clearContextData();
  await fetchCards();
};
const buildCountDownToCloseAlert = () => {
  setTimeout(() => {
    deleteError.value = false;
  }, 5000);
};

const fillContextData = (passwordCard) => {
  const { id, ...rest } = passwordCard;
  currentId.value = id;
  activePasswordCard.value = new PasswordCard(rest);
};

const onEditCard = (passwordCard) => {
  fillContextData(passwordCard);
  passwordModalOpen.value = true;
};
const onDeleteCard = (passwordCard) => {
  deleteQuestion.value = buildDeleteQuestion(passwordCard);
  fillContextData(passwordCard);
  confirmDeleteModalOpen.value = true;
};
const confirmDeleteCard = async () => {
  const response = await del({ endpoint: endpoint.value, param: currentId.value });
  if (response.status === 404) {
    updateList();
    deleteError.value = true;
    buildCountDownToCloseAlert();
    return;
  }
  updateList();
};

onMounted(() => {
  fetchCards();
});

</script>
