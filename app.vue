<template>
  <div class="flex flex-col min-h-screen">
    <NuxtPage />
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
router.afterEach(() => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
});
</script>
