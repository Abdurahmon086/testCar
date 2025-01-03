<script lang="ts" setup>
import { aboutUs } from "~/constants";

const { data } = await useAsyncData(
    "home",
    async () => {
        const [cars, brands, news] = await Promise.all([
            $fetch("/api/cars"),
            $fetch("/api/brands"),
            $fetch("/api/news"),
        ]);
        return { cars, brands, news };
    },
    {
        deep: true,
    }
);
</script>
<template>
    <section class="mt-24">
        <div class="container">
            <h3 class="main-title">АВТОМОБИЛЬНЫЙ КАТАЛОГ</h3>
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="item in data?.cars?.slice(0, 6)" :key="item?.id">
                    <CardsMainCar :data="item" />
                </li>
            </ul>
            <NuxtLink to="/" class="flex-center mt-4 justify-end">
                <p class="border-b border-grayer text-sm leading-[18px]">Перейти в каталог</p>
                <Icon name="uil:arrow-right" class="ml-1 text-xl" />
            </NuxtLink>
        </div>
    </section>

    <!-- Почему мы? section -->
    <section class="mt-24">
        <div class="container">
            <h3 class="main-title">Почему мы?</h3>
            <ul class="grid grid-cols-4 gap-6">
                <li v-for="item in aboutUs" :key="item?.id">
                    <CardsAboute :data="item" />
                </li>
            </ul>
        </div>
    </section>

    <!-- О нашей компании section -->
    <section class="mt-28">
        <div class="container">
            <div class="bg-[#F6F6F6] rounded-lg">
                <div class=""></div>
                <div class="">
                    <h3>О нашей компании</h3>
                    <p>
                        Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно отбираем автомобили для
                        наших клиентов, учитывая их потребности и бюджет. Мы работаем только с надежными поставщиками и
                        перевозчиками, чтобы обеспечить безопасность и надежность доставки.
                    </p>
                    <ShareButton>Связаться с нами</ShareButton>
                </div>
            </div>
        </div>
    </section>

    <!-- Brands section-->
    <section class="mt-24">
        <div class="container">
            <ul class="grid grid-cols-6 my-10">
                <li v-for="item in data?.brands" :key="item?.id">
                    <CardsBrand :data="item" />
                </li>
            </ul>
        </div>
    </section>

    <!-- выбором section-->
    <section class="mt-12">
        <div class="container">
            <div class="rounded-xl bg-gradient-to-r from-[#3593F3] to-[#0C74DF] text-white">
                <div class="bg-[url('/images/bg1.png')] bg-no-repeat bg-right pt-5 pb-8 px-10">
                    <h4 class="text-[28px] leading-8 font-medium">Не можете определится с выбором?</h4>
                    <p class="text-[15px] leading-5 max-w-[383px] mt-1 mb-4">
                        Оставьте заявку, и наши менеджеры проконсультируют вас!
                    </p>
                    <ShareButton color="bg-[#71B2F7]">Оставить заявку</ShareButton>
                </div>
            </div>
        </div>
    </section>

    <!-- Новости section-->
    <section class="mt-24">
        <div class="container">
            <h3 class="main-title">Новости</h3>
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="item in data?.news?.slice(0, 3)" :key="item?.id">
                    <CardsNew :data="item" />
                </li>
            </ul>
        </div>
    </section>

    <!-- Отзывы section-->
    <section class="my-24">
        <div class="container">
            <h3 class="main-title">Отзывы</h3>
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="(item, i) in 3" :key="i">
                    <CardsReview />
                </li>
            </ul>
        </div>
    </section>
</template>

<style></style>
