<template>
  <AppNavBar>
    <template v-slot:left>
      <SearchInput name="search-cards" id="search-cards" v-model="filter" placeholder="Search cards" />
    </template>
  </AppNavBar>
  <PageContainer>
    <PasswordCards />
  </PageContainer>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import AppNavBar from './components/AppNavBar.vue';
import PageContainer from './components/PageContainer.vue';
import SearchInput from './components/SearchInput.vue';
import PasswordCards from './pages/PasswordCards.vue';
import { usePasswordCardsStore } from './stores/password-cards.store';

const store = usePasswordCardsStore();
const { filter } = storeToRefs(store);

</script>
