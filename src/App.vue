<script setup>
import { ref } from "vue";
import { profileService } from "@/services/profileService";

const profileData = ref(null);

const fetchProfile = async () => {
  try {
    profileData.value = await profileService.fetchProfile(1);
  } catch (err) {
    console.log("fetch error", err);
  }
};
</script>

<template>
  <div>
    <h1>Vue Mocks</h1>

    <button type="button" @click="fetchProfile">Fetch Mocks</button>

    <section v-if="profileData">
      <pre>{{ profileData }}</pre>
    </section>
  </div>
</template>

<style scoped></style>
