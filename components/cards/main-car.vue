<script lang="ts" setup>
import type { Car } from "~/types";

const { data } = defineProps<{ data: Car }>();
</script>
<template>
    <article v-if="data" class="bg-white rounded-t-2xl rounded-b-xl shadow-lg w-full ">
        <div class="relative w-full h-[225px] sm:h-[280px] rounded-2xl overflow-hidden">
            <ShareCustomIImage :src="data?.image[0]" />
        </div>
        <div class="mt-1 py-[10px] sm:py-[18px] px-4 sm:px-5">
            <h4 class="text-sm sm:text-lg text-primary">{{ data?.model }}, {{ data?.year }}</h4>
            <span class="text-base sm:text-xl font-bold text-primary"
                >{{
                    data?.cost.toLocaleString("en-US", {
                        currency: "USD",
                        style: "decimal",
                    })
                }}
                $</span
            >
            <div class="grid grid-cols-2 text-lightGray text-xs sm:text-[15px] mt-1">
                <p>{{ data?.milage }} км</p>
                <p>Робот</p>
                <p>1.4/100 л.с./{{ data?.engine }}</p>
                <p>{{ data?.checkpoint }}</p>
            </div>
            <div class="flex-center text-lightGray mt-[6px]">
                <p class="text-xs sm:text-sm">{{ data?.country }}</p>
                <Icon name="uil:heart" class="ml-auto text-xl" />
            </div>
        </div>
    </article>
</template>

<style></style>
