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
    <article v-if="data" class="w-[306px] h-[236px] bg-white rounded-lg shadow-md pt-[35px] px-[25px] pb-[22px]">
        <div class="">
            <img :src="data?.image" :alt="data?.title" />
            <h4 class="mt-2 text-lg font-medium">{{ data?.title }}</h4>
            <p class="mt-1 text-[15px] text-lightGray">{{ data?.content }}</p>
        </div>
    </article>
</template>

<style></style>
