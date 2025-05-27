<template>
  <div class="city-list">
    <h2>Liste des villes par code postal</h2>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher une ville ou un code postal"
      class="search-bar"
    />

    <ul v-if="filteredCities.length">
      <li v-for="city in filteredCities" :key="city.insee">
        <strong>{{ city.name }}</strong> ({{ city.zipcode }}) – {{ city.population }} habitants
        <i v-if="city.weatherIcon" :class="`bi bi-${city.weatherIcon}`" style="margin-left: 8px;"></i>
      </li>
    </ul>

    <p v-else>Aucune ville trouvée.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CityList',
  data() {
    return {
      cities: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredCities() {
      const query = this.searchQuery.toLowerCase();
      return this.cities.filter(
        city =>
          city.name.toLowerCase().includes(query) ||
          city.zipcode.includes(query)
      );
    },
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/cities');
      this.cities = response.data;
    } catch (error) {
      console.error('Erreur de chargement des villes:', error);
    }
  },
};
</script>

<style scoped>
.city-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.search-bar {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
</style>