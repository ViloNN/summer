<script setup>
import { initFlowbite } from "flowbite";
import { watch } from "vue";

// https://open-meteo.com/en/docs/

const { locale } = useI18n();
const isOpen = ref(false);
const route = useRoute();

const activeLink = ref(`${route.path}`);

watch(
  () => route.path,
  () => (activeLink.value = route.path)
);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const changeSite = async (to) => {
  isOpen.value = false;
  await navigateTo(to);
};

const links = [
  {
    label: "Strona główna",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Okolica",
    icon: "i-heroicons-map-pin",
    to: "/okolica",
  },
  {
    label: "Galeria",
    icon: "i-heroicons-photo",
    to: "/galeria",
  },
  {
    label: "Apartamenty",
    icon: "i-heroicons-home-modern",
    to: "/apartamenty",
  },
  {
    label: "Oferta",
    icon: "i-heroicons-document-text",
    to: "/oferta",
  },
  {
    label: "Wskazówki",
    icon: "i-heroicons-light-bulb",
    to: "/wskazowki",
  },
  {
    label: "Kontakt",
    icon: "i-heroicons-phone",
    to: "/kontakt",
  },
];

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <nav
      class="w-full flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-100 border-gray-200 dark:bg-gray-900"
    >
      <span
        class="w-full flex items-center justify-between md:justify-center mx-auto my-2"
      >
        <span
          class="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          <!-- {{ $t("welcome") }}
          <select v-model="locale">
            <option value="en">en</option>
            <option value="pl">pls</option>
          </select> -->
          <NuxtImg
            src="https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png"
            class="h-8 pr-2"
          />
        </span>

        <UButton @click="isOpen = true" class="md:hidden">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </UButton>
      </span>

      <ul
        class="hidden md:flex flex-row items-center justify-center m-auto font-medium my-2 border border-gray-100 rounded-lg space-x-8 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <NuxtLink
            to="/"
            :class="activeLink == '/' ? 'activeLink' : 'link'"
            aria-current="page"
            >Strona główna</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/okolica"
            :class="activeLink == '/okolica' ? 'activeLink' : 'link'"
            >Okolica</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/galeria"
            :class="activeLink == '/galeria' ? 'activeLink' : 'link'"
            >Galeria</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/apartamenty"
            :class="activeLink == '/apartamenty' ? 'activeLink' : 'link'"
            >Apartamenty</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/oferta"
            :class="activeLink == '/oferta' ? 'activeLink' : 'link'"
            >Oferta</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/wskazowki"
            :class="activeLink == '/wskazowki' ? 'activeLink' : 'link'"
            >Wskazówki</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/kontakt"
            :class="activeLink == '/kontakt' ? 'activeLink' : 'link'"
            >Kontakt</NuxtLink
          >
        </li>
      </ul>

      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          class="hidden md:flex items-center"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="hidden md:block w-8 h-8" />
        </template>
      </ClientOnly>
    </nav>

    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              <ClientOnly>
                <UButton
                  :icon="
                    isDark
                      ? 'i-heroicons-moon-20-solid'
                      : 'i-heroicons-sun-20-solid'
                  "
                  color="gray"
                  variant="ghost"
                  aria-label="Theme"
                  @click="isDark = !isDark"
                />
                <template #fallback>
                  <div class="w-8 h-8" />
                </template>
              </ClientOnly>
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col w-full">
          <UButton
            v-for="item in links"
            :key="item"
            :icon="item.icon"
            size="sm"
            color="primary"
            variant="outline"
            :label="item.label"
            :trailing="false"
            class="my-0.5"
            @click="changeSite(item.to)"
          />
        </div>
      </UCard>
    </USlideover>

    <slot />
  </div>
</template>
<style scoped>
.activeLink {
  @apply block text-blue-500 transition-all;
}

.link {
  @apply block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all;
}
</style>
