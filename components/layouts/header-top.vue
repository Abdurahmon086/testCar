<script lang="ts" setup>
import { header_top_data, socialData } from '~/constants';


</script>
<template>
    <div class="container py-4 flex-center">
        <nav class="">
            <ul class="flex-center gap-10 ">
                <li v-for="item in header_top_data" :key="item.id" ">
                    <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="ml-auto flex-center gap-7">
            <ul class="flex-center gap-4">
                <li v-for="item in socialData" :key="item.id">
                    <NuxtLink :to="item.link" target="_blank"> 
                        <Icon :name="item.icon_name" class="align-middle mb-1" style="color: #989898" />
                    </NuxtLink>
                </li>
            </ul>
            <div class="text-lightGray flex-center text-sm gap-7">
                <NuxtLink to="tel:+7 (777) 777-77-77" class="flex-center gap-1">
                    <Icon name="uil:phone" class="" />
                    <p>+7 (777) 777-77-77</p>
                </NuxtLink>
                <NuxtLink to="mailTo:Info@mail.ru" class="flex-center gap-1">
                    <Icon name="uil:envelope" />
                    <p>Info@mail.ru</p>
                </NuxtLink>
            </div>
            <p class="text-sm flex-center">RU <Icon name="uil:angle-down" class="  text-lg" /> </p>
        </div>
    </div>
</template>

<style></style>
