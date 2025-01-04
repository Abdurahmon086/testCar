<script lang="ts" setup>
interface abouteUs {
    id: number;
    title: string;
    content: string;
    image: string;
}

const { data } = defineProps<{ data: abouteUs }>();
</script>
<template>
    <article
        v-if="data"
        class="overflow-hidden w-full h-[166px] md:h-[236px] bg-white rounded-lg shadow-md pt-[7px] md:pt-[35px] px-[7px] md:px-[25px] pb-[16px] md:pb-[22px]"
    >
        <div class="">
            <img :src="data?.image" :alt="data?.title" />
            <h4 class="mt-2 text-base md:text-lg font-medium">{{ data?.title }}</h4>
            <p class="mt-1 text-[14px] md:text-[15px] text-lightGray">{{ data?.content }}</p>
        </div>
    </article>
</template>

<style></style>
