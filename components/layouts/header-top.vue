<script lang="ts" setup>
const data = [
    {
        id: 1,
        name: "Главная",
        link: "/",
    },
    {
        id: 2,
        name: "Каталог",
        link: "/catalog",
    },
    {
        id: 3,
        name: "О нас",
        link: "/about",
    },
    {
        id: 4,
        name: "Новости",
        link: "/news",
    },
    {
        id: 5,
        name: "Контакты",
        link: "/contacts",
    },
];

const socialData = [
    {
        id: 1,
        name: "Vkontakte",
        icon_name: "akar-icons:vk-fill",
        link: "https://vk.com",
    },
    {
        id: 2,
        name: "Whatsapp",
        icon_name: "uil:whatsapp",
        link: "https://whatsapp.com",
    },
    {
        id: 3,
        name: "Instagram",
        icon_name: "uil:instagram",
        link: "https://instagram.com",
    },
];
</script>
<template>
    <div class="container bg-[#F6F6F6] py-4 flex-center">
        <nav class="">
            <ul class="flex-center gap-10 ">
                <li v-for="item in data" :key="item.id" ">
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
            <p class="text-sm">RU</p>
        </div>
    </div>
</template>

<style></style>
