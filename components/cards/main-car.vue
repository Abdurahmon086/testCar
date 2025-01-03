<script lang="ts" setup>
import type { Car } from "~/types";

const { data } = defineProps<{ data: Car }>();
</script>
<template>
    <article class="bg-white rounded-t-2xl rounded-b-xl shadow-lg w-[415px]">
        <div class="relative w-full h-[280px] rounded-2xl overflow-hidden">
            <ShareCustomIImage :src="data?.image[0]" />
        </div>
        <div class="mt-1 py-[18px] px-5">
            <h4 class="text-lg text-primary">{{ data?.model }}, {{ data?.year }}</h4>
            <span class="text-xl font-bold text-primary"
                >{{
                    data?.cost.toLocaleString("en-US", {
                        currency: "USD",
                        style: "decimal",
                    })
                }}
                $</span
            >
            <div class="grid grid-cols-2 text-lightGray text-[15px] mt-1">
                <p>{{ data?.milage }} км</p>
                <p>Робот</p>
                <p>1.4/100 л.с./{{ data?.engine }}</p>
                <p>{{ data?.checkpoint }}</p>
            </div>
            <div class="flex-center text-lightGray mt-[6px]">
                <p class="text-sm">{{ data?.country }}</p>
                <Icon name="uil:heart" class="ml-auto text-xl" />
            </div>
        </div>
    </article>
</template>

<style></style>
