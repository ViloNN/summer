<script setup>
const divideNumbs = [1.8, 1.9, 2.0, 2.1, 2.2, 2.3];

const props = defineProps({
  data: Object,
});

const temp = computed(() => {
  return (props.data.minTemp + props.data.maxTemp) / 2;
});

const iconName = computed(() => {
  const icon = props.data.icon;
  if (icon == "sunny") {
    return "i-wi-day-sunny";
  } else if (icon == "rain") {
    return "i-wi-rain";
  } else if (icon == "partly-cloudy-day") {
    return "i-wi-day-cloudy";
  } else if (icon == "cloudy") {
    return "i-wi-cloudy";
  } else if (icon == "clear-day") {
    return "i-wi-day-sunny";
  }
});
</script>
<template>
  <div class="cardContainer mr-4 last:mr-0">
    <div class="card">
      <p class="city">{{ props.data.day }}</p>
      <p class="weather">{{ props.data.summary }}</p>
      <UIcon :name="iconName" class="w-14 h-14" dynamic />
      <p class="temp">{{ temp }}°</p>
      <div class="minmaxContainer">
        <div class="min">
          <p class="minHeading">Min</p>
          <p class="minTemp">{{ props.data.minTemp }}°</p>
        </div>
        <div class="max">
          <p class="maxHeading">Max</p>
          <p class="maxTemp">{{ props.data.maxTemp }}°</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cardContainer {
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: relative;
  width: 220px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  @apply bg-gray-100 dark:bg-gray-900;
  border: 1px solid rgba(255, 255, 255, 0.089);
}

.city {
  font-weight: 700;
  font-size: 0.9em;
  letter-spacing: 1.2px;
  @apply text-gray-900 dark:text-white;
}

.weather {
  font-weight: 500;
  font-size: 0.7em;
  letter-spacing: 1.2px;
  @apply text-gray-900 dark:text-white;
}

.temp {
  font-size: 1.8em;
  @apply text-gray-900 dark:text-white;
}

.minmaxContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.min,
.max {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 20px;
  gap: 4px;
}

.max {
  align-items: flex-start;
  border-left: 2px solid;
  @apply border-gray-900 dark:border-white;
}

.maxHeading,
.minHeading {
  font-size: 0.7em;
  font-weight: 600;
  @apply text-gray-900 dark:text-white;
}

.maxTemp,
.minTemp {
  font-size: 0.6em;
  font-weight: 500;
  @apply text-gray-900 dark:text-white;
}
</style>
