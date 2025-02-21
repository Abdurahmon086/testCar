<script lang="ts" setup>
import type { Car } from "~/types";

const { data } = defineProps<{ data?: Car[] }>();

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
    <div v-if="loading" class="container bg-[#F4F4F4] w-full h-[574px] md:h-[409px]"></div>
    <div v-else-if="data && loading == false" class="container relative">
        <ClientOnly>
            <swiper-container ref="containerRef">
                <swiper-slide
                    v-for="item in data"
                    :key="item?.id"
                    class="bg-[#F4F4F4] pt-6 md:pt-14 px-4 md:px-10 h-[574px] md:h-[409px] rounded-xl bg-no-repeat bg-[length:auto_275px] md:bg-[length:770px_384px] bg-[left_bottom_5rem] md:bg-right"
                    :class="`bg-[url('/images/hero.png')]`"
                >
                    <div>
                        <h2 class="text-2xl md:text-4xl font-medium uppercase">{{ item?.model }}</h2>
                        <p class="text-sm md:text-base max-w-[442px] mt-2 mb-4 md:mb-6 text-[#5A5A5A] line-clamp-3">{{ item?.description }}</p>
                        <ShareButton color="bg-secondary !py-[25px] !px-[68px] text15 !w-full md:!w-fit">Подробнее</ShareButton>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

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
