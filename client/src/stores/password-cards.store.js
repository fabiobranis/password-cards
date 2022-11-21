import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { get } from '../utils/client';
import { PasswordCard } from '../types/password-card.type';

export const usePasswordCardsStore = defineStore('password-cards', () => {
  const cards = ref([]);
  const filter = ref('');

  const activeCards = computed(() => (
    filter.value
      ? cards.value
        .filter(({ name }) => name
          .toLowerCase().includes(filter.value.toLowerCase()))
      : cards.value
  ));

  async function fetchCards() {
    const response = await get({ endpoint: 'password-cards' });
    cards.value = (await response.json())
      .map((data) => new PasswordCard(data));
  }

  return {
    fetchCards, activeCards, cards, filter,
  };
});
