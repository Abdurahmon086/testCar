<script lang="ts" setup>
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
const data = [
    {
        id: 1,
        name: "Каталог",
        link: "/catalog",
    },
    {
        id: 2,
        name: "О нас",
        link: "/about",
    },
    {
        id: 3,
        name: "Новости",
        link: "/news",
    },
    {
        id: 4,
        name: "Контакты",
        link: "/contacts",
    },
    {
        id: 5,
        name: "Избранные",
        link: "/chosen",
    },
];

const avto = [
    {
        id: 1,
        name: "Из Европы",
    },
    {
        id: 2,
        name: "Из США",
    },
    {
        id: 3,
        name: "Из ОАЭ",
    },
    {
        id: 4,
        name: "Из Китая",
    },
    {
        id: 5,
        name: "Из Кореи",
    },
];

const carBrands = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Chery" },
    { id: 4, name: "Daewoo" },
    { id: 5, name: "Fiat" },
    { id: 6, name: "Aston Martin" },
    { id: 7, name: "Baic" },
    { id: 8, name: "Cadillac" },
    { id: 9, name: "Datsun" },
    { id: 10, name: "Ford" },
    { id: 11, name: "Acura" },
    { id: 12, name: "Byd" },
    { id: 13, name: "Changan" },
    { id: 14, name: "Dodge" },
    { id: 15, name: "GAC" },
    { id: 16, name: "Alfa Romeo" },
    { id: 17, name: "Bentley" },
    { id: 18, name: "Chevrolet" },
    { id: 19, name: "EXEED" },
    { id: 20, name: "Geely" },
    { id: 21, name: "Avatr" },
    { id: 22, name: "Chery" },
    { id: 23, name: "Citroen" },
    { id: 24, name: "Ferrari" },
    { id: 25, name: "Genesis" },
];
</script>
<template>
    <div class="container border-t border-[#DADADA] pt-8 pb-3">
        <div class="flex items-start justify-between gap-[86px]">
            <div class="">
                <ShareLogo />
                <ul class="flex-center gap-5 mt-1 text-2xl">
                    <li v-for="item in socialData" :key="item.id">
                        <NuxtLink :to="item.link" target="_blank">
                            <Icon :name="item.icon_name" class="align-middle mb-1" style="color: #989898" />
                        </NuxtLink>
                    </li>
                </ul>
                <p class="mt-2 w-[313px] text-[13px] font-medium text-grayer leading-[14.65px]">
                    © 1-й автоброкер <br />
                    Внесём качественные изменения в Вашу жизнь!
                </p>
            </div>
            <div class="flex items-start gap-20">
                <div class="w-[103px]">
                    <h4 class="text17-foo">Компания</h4>
                    <ul class="mt-4 flex flex-col text15-foo gap-x-5 gap-y-4">
                        <li v-for="item in data">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h4 class="text17-foo">Aвтомобили</h4>
                    <ul class="mt-4 flex flex-col text15-foo gap-x-5 gap-y-4">
                        <li v-for="item in avto">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h4 class="text17-foo">Марки</h4>
                    <ul class="mt-4 grid grid-cols-5 gap-x-5 gap-y-4">
                        <li v-for="item in carBrands" class="w-[103px] text15-foo">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-14 flex-center justify-between text-[#5A5A5A] text-[13px] font-medium">
            <p class="w-1/6"></p>
            <p>Политика конфиденциальности</p>
            <p>Сделано в UserTech</p>
        </div>
    </div>
</template>

<style></style>
