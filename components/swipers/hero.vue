<script lang="ts" setup>
import type { Car } from "~/types";
import "swiper/css";

const { data } = defineProps<{ data: Car[] }>();

const containerRef = ref(null);
const loading = ref(true);
const swiper = useSwiper(containerRef, {
    effect: "creative",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
});

onMounted(() => {
    loading.value = false;
});
</script>

<template>
    <div v-if="loading" class="container bg-[#F4F4F4] w-full h-[409px]"></div>
    <div v-else-if="data && loading == false" class="container relative">
        <ClientOnly>
            <swiper-container ref="containerRef">
                <swiper-slide
                    v-for="item in data"
                    :key="item?.id"
                    class="bg-[#F4F4F4] pt-14 px-10 h-[409px] rounded-xl bg-no-repeat bg-right"
                    :class="`bg-[url('/images/hero.png')]`"
                    :style="{
                        backgroundSize: '770px',
                        backgroundPosition: 'calc(100% - 10px) center',
                    }"
                >
                    <div>
                        <h2 class="text-4xl font-medium uppercase">{{ item?.model }}</h2>
                        <p class="max-w-[442px] mt-2 mb-6 text-[#5A5A5A] line-clamp-2">{{ item?.description }}</p>
                        <ShareButton color="bg-secondary !py-[25px] !px-[68px] text15">Подробнее</ShareButton>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <!-- Go back one slide -->
        <div class="absolute bottom-2 flex-center text-[#989898] space-x-4 right-5 z-50">
            <button @click="swiper.prev()" class="w-[48px] h-[48px] rounded-full bg-white flex-center justify-center">
                <Icon name="uil:arrow-left" class="text-3xl" />
            </button>
            <button @click="swiper.next()" class="w-[48px] h-[48px] rounded-full bg-white flex-center justify-center">
                <Icon name="uil:arrow-right" class="text-3xl" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.swiper .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-80%);
    z-index: 10;
}
</style>
