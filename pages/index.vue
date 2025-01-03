<script lang="ts" setup></script>
<template>
    <div class="container mx-auto">
        <div class="w-full h-full">
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="(item, i) in 6" :key="i">
                    <CardsMainCar />
                </li>
            </ul>
            <ul class="grid grid-cols-4 gap-6 my-10">
                <li v-for="(item, i) in 4" :key="i">
                    <CardsAboute />
                </li>
            </ul>
            <ul class="grid grid-cols-6 my-10">
                <li v-for="(item, i) in 17" :key="i">
                    <CardsBrand />
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>
