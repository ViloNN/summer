<script setup>
import { onMounted } from "vue";

const weather = ref(null);

const { data } = await useFetch("/api/weather");
weather.value = data.value;

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const scrollContainerRef = ref(null);

const scroll = (direction) => {
  const scrollAmount = 300;
  const container = scrollContainerRef.value;
  if (container) {
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }
};

// https://weatherwidget.io/

onMounted(async () => {});
</script>
<template>
  <div>
    <section>
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Payments tool for software companies
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Oferta
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <UCarousel
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="rounded-lg overflow-hidden"
            arrows
          >
            <img :src="item" class="w-full" draggable="false" />
          </UCarousel>
        </div>
      </div>
    </section>
    <section class="flex flex-col max-w-screen-xl py-4 mx-auto lg:py-12">
      <div class="pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 cursor-pointer"
          @click="scroll('right')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
        <span class="mt-4 font-bold"> {{ weather?.timezone }}</span>
      </div>

      <div
        ref="scrollContainerRef"
        class="flex flex-row items-center justify-between overflow-x-scroll w-full m-4"
      >
        <WeatherCard
          v-for="item in weather?.forecast"
          :key="item"
          :data="item"
        />
      </div>
    </section>
    <section>
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16"
      >
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          We didn't reinvent the wheel
        </h2>
        <p
          class="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400"
        >
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </p>
        <div class="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
          <img
            class="col-span-2 mb-4 sm:mb-0 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
            alt="content gallery 1"
          />
          <img
            class="hidden col-span-1 sm:block rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
            alt="content gallery 2"
          />
          <img
            class="hidden col-span-1 sm:block rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="content gallery 3"
          />
          <img
            class="hidden col-span-1 sm:block rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png"
            alt="content gallery 4"
          />
          <img
            class="col-span-2 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png"
            alt="content gallery 5"
          />
          <img
            class="hidden col-span-1 sm:block rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png"
            alt="content gallery 6"
          />
        </div>
      </div>
    </section>
  </div>
</template>
