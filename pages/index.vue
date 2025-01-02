<script lang="ts" setup></script>
<template>
    <div class="container mx-auto">
        <div class="w-full h-full">
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="(item, i) in 10" :key="i">
                    <CardsMainCar />
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>
