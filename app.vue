<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Footer />
</template>
<style global>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(30px);
}
</style>
