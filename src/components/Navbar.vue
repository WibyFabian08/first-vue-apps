<template>
  <div class="relative">
    <header class="flex items-center justify-between h-16 bg-white shadow">
      <router-link
        :to="{ name: 'home' }"
        class="px-5 lg:px-36 text-xl font-bold text-orange-500"
      >
        Home
      </router-link>
      <div class="hidden h-full xl:block">
        <div class="flex items-center justify-center h-full gap-4 px-5">
          <router-link
            v-for="menu of navMenu"
            :to="{ name: `${menu.name}` }"
            class="inline-flex items-center h-full px-5 font-semibold text-orange-500 transition-all duration-150 hover:bg-orange-600 hover:text-white"
            :class="{ 'bg-orange-500 text-white': activeRoute == menu.name }"
            >{{ menu.label }}</router-link
          >
        </div>
      </div>
      <div class="block px-5 xl:hidden">
        <img
          :src="MenuIcon"
          @click="handleCLickMenu"
          class="h-6 cursor-pointer"
          alt="menu-icon"
        />
      </div>
    </header>

    <Transition name="fade">
      <div
        v-if="isShow"
        class="absolute inset-0 top-0 bottom-0 left-0 right-0 z-10 block overflow-hidden bg-white xl:hidden"
        :class="{ 'h-screen': isShow }"
      >
        <div class="relative w-full h-full bg-white">
          <div class="absolute top-5 right-5 left-5">
            <div class="flex items-center justify-between">
              <router-link
                :to="{ name: 'home' }"
                class="px-5 text-xl font-bold text-orange-500"
              >
                Home
              </router-link>
              <img
                :src="CrossIcon"
                @click="handleCLickMenu"
                class="h-4 cursor-pointer"
                alt="cross-icon"
              />
            </div>
          </div>
          <div class="flex flex-col items-center justify-between p-20">
            <router-link
              v-for="menu of navMenu"
              :to="{ name: `${menu.name}` }"
              class="px-10 py-5 font-semibold text-center text-orange-500 transition-all duration-150 hover:bg-orange-600 hover:text-white"
              :class="{ 'bg-orange-500 text-white': activeRoute == menu.name }"
              >{{ menu.label }}
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { MenuIcon, CrossIcon } from "../assets/icons/index";
import navMenu from "../constants/navMenu";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeRoute = computed(() => {
  return route.name;
});

const isShow = ref(false);

function handleCLickMenu() {
  isShow.value = !isShow.value;
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
