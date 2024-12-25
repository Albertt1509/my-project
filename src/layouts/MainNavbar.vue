<template>
  <nav class="bg-pink-500 text-white p-4 flex items-center">
    <!-- Logo -->
    <div class="font-bold text-lg">
      <router-link to="/" class="hover:underline">MyApp</router-link>
    </div>

    <!-- Menu Utama -->
    <ul class="flex ml-6 space-x-4">
      <li>
        <router-link to="/home" class="non:underline" :class="{ 'font-bold': isActive('/home') }">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/work" class="non:underline" :class="{ 'font-bold': isActive('/work') }">
          Work
        </router-link>
      </li>
      <li>
        <router-link to="/meet" class="non:underline" :class="{ 'font-bold': isActive('/meet') }">
          Meeting
        </router-link>
      </li>
    </ul>

    <div class="relative ml-auto">
      <input v-model="searchQuery" type="text" placeholder="Search..."
        class="rounded-full px-4 py-2 pr-10 text-gray-700 focus:outline-none" />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
        @click="performSearch">
        <font-awesome-icon :icon="['fas', 'search']" />
      </span>
    </div>

    <!-- Profile Dropdown -->
    <div class="relative ml-6">

      <router-link to="/Profile" class=" block px-4 py-2 ">
        Profile
      </router-link>

    </div>
  </nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faSearch);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      searchQuery: "",
      isDropdownOpen: false,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    isActive(route) {
      return this.$route.path === route;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    performSearch() {
      alert(`Searching for: ${this.searchQuery}`);
    },
    logout() {
      alert("Logging out...");
    },
  },
};
</script>

<style scoped></style>
