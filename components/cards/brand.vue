<script lang="ts" setup>
import type { CarBrand } from "~/types";

const { data } = defineProps<{ data: CarBrand }>();
</script>
<template>
    <article
        v-if="data"
        class="w-[216px] h-[168px] border flex-center flex-col justify-center hover:shadow-lg cursor-pointer transition-all duration-500"
    >
        <div class="relative w-8/12 h-auto">
            <ShareCustomIImage :src="data?.image" :alt="data?.mark_name" />
        </div>
        <h4 class="flex-shrink font-medium mt-2">{{ data?.mark_name }}</h4>
    </article>
</template>

<style></style>
