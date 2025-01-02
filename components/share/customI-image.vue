<script lang="ts" setup>
const { src, alt, style } = defineProps<{ src: string; alt?: string; style?: string }>();
</script>

<template>
    <div class="relative w-full h-full">
        <img :src="src" :alt="alt" :class="style ? style : `object-fill object-center w-full h-full`" />
    </div>
</template>
