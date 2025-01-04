<script lang="ts" setup>
import type { New } from "~/types";

const { data } = defineProps<{ data: New }>();
</script>
<template>
    <article
        v-if="data"
        class="bg-white rounded-t-3xl rounded-b-xl shadow-lg w-[290px] md:w-[415px] h-[323px] md:h-[445px]"
    >
        <div class="relative w-full h-[195px] md:h-[280px] rounded-3xl overflow-hidden">
            <ShareCustomIImage :src="data?.image" :alt="data?.title" />
        </div>
        <div class="mt-2 pb-[18px] md:pb-[25px] pt-[7px] md:pt-[11px] px-[13px] md:px-[19px] text-grayer flex flex-col h-[121px] md:h-[155px]">
            <div class="flex-1">
                <h4 class="text19">{{ data?.title }}</h4>
                <p class="text15 text-lightGray mt-2 line-clamp-2">{{ data?.content }}</p>
            </div>
            <NuxtLink to="/" class="flex-center mt-2 md:mt-4">
                <p class="border-b border-grayer text-sm leading-[18px]">Подробнее</p>
                <Icon name="uil:arrow-right" class="ml-1 text-xl" />
            </NuxtLink>
        </div>
    </article>
</template>

<style></style>
