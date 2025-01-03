<script lang="ts" setup></script>
<template>
    <button class="main-btn">
        <slot />
    </button>
</template>

<style scoped>
.main-btn {
    background-color: #71b2f7;
    padding: 21px 38px;
    font-size: 14px;
    line-height: 16.1px;
    color: white;
    border-radius: 3px;
    width: fit-content;
}
</style>
