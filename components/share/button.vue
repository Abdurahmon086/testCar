<script lang="ts" setup>
const { color, disabled } = defineProps<{ color?: string; disabled?: boolean }>();
</script>
<template>
    <button :class="['main-btn', color ? color : 'bg-secondary']" :disabled="disabled">
        <slot />
    </button>
</template>

<style scoped>
.main-btn {
    padding: 21px 38px;
    font-size: 14px;
    line-height: 16.1px;
    color: white;
    border-radius: 3px;
    width: fit-content;
}
</style>
