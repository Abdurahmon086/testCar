<script lang="ts" setup>
import { aboutUs } from "~/constants";

const { data, error, status } = await useAsyncData(
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
    <template v-if="status === 'pending'"><ShareLoading /></template>
    <template v-else-if="data && status === 'success'">
        <section class="mt-8">
            <SwipersHero :data="data?.cars.slice(3, 6)" />
        </section>

        <!-- Подбор авто section -->
        <section class="mt-5 md:mt-24">
            <SectionsFilterAvto />
        </section>

        <section class="mt-5 md:mt-24">
            <div class="container">
                <h3 class="main-title">Автомобильный каталог</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <li v-for="item in data?.cars?.slice(0, 6)" :key="item?.id">
                        <CardsMainCar :data="item" />
                    </li>
                </ul>
                <NuxtLink to="/" class="flex-center mt-4 justify-center md:justify-end">
                    <p class="border-b border-grayer text-sm leading-[18px]">Перейти в каталог</p>
                    <Icon name="uil:arrow-right" class="ml-1 text-xl" />
                </NuxtLink>
            </div>
        </section>

        <!-- Почему мы? section -->
        <section class="mt-5 md:mt-24">
            <div class="container">
                <h3 class="main-title">Почему мы?</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <li v-for="item in aboutUs" :key="item?.id">
                        <CardsAboute :data="item" />
                    </li>
                </ul>
            </div>
        </section>

        <!-- О нашей компании section -->
        <section class="mt-9 md:mt-28">
            <div class="container">
                <div
                    class="bg-[#F6F6F6] rounded-lg flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-between lg:h-[390px]"
                >
                    <div
                        class="bg-[url('/images/person-bg.png')] bg-no-repeat lg:w-1/3 h-min mx-auto lg:ml-10"
                        style="background-position: 10px -8px"
                    >
                        <img src="/images/person.png" alt="person image" class="h-[442px] lg:-translate-y-[52px]" />
                    </div>
                    <div class="kompny-us pt-[53px] pr-4">
                        <h3 class="text-[23px] md:text-[30px] leading-[27.88px] md:leading-[36px] font-medium">
                            О нашей компании
                        </h3>
                        <p class="text-sm md:text-base mt-2 mb-5 w-full md:max-w-[623px] text-[#989898]">
                            Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно отбираем автомобили
                            для наших клиентов, учитывая их потребности и бюджет. Мы работаем только с надежными
                            поставщиками и перевозчиками, чтобы обеспечить безопасность и надежность доставки.
                        </p>
                        <ShareButton color="!w-full md:!w-fit bg-secondary">Связаться с нами</ShareButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- Brands section-->
        <section class="mt-5 md:mt-24">
            <div class="container">
                <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-10">
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
                    <div
                        class="h-[414px] md:h-auto bg-[url('/images/bg1.png')] bg-no-repeat bg-[bottom_left_1rem] md:bg-right pt-4 md:pt-5 pb-8 px-4 md:px-10"
                    >
                        <h4 class="text-[23px] md:text-[28px] leading-7 md:leading-8 font-medium">
                            Не можете определится с выбором?
                        </h4>
                        <p class="text-[14px] md:text-[15px] leading-5 max-w-[383px] mt-1 mb-4">
                            Оставьте заявку, и наши менеджеры проконсультируют вас!
                        </p>
                        <ShareButton color="!w-full md:!w-fit bg-[#71B2F7]">Оставить заявку</ShareButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- Новости section-->
        <section class="mt-5 md:mt-24">
            <div class="container">
                <h3 class="main-title">Новости</h3>
                <div class="overflow-x-auto">
                    <ul class="flex space-x-6">
                        <li v-for="item in data?.news?.slice(0, 3)" :key="item?.id" class="flex-shrink-0 w-[290px] md:w-[415px]">
                            <CardsNew :data="item" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Отзывы section-->
        <section class="my-5 md:my-24">
            <div class="container">
                <h3 class="main-title">Отзывы</h3>
                <div class="overflow-x-auto">
                    <ul class="flex space-x-6">
                        <li v-for="(item, i) in 3" :key="i" class="flex-shrink-0 w-[290px] md:w-[416px]">
                            <CardsReview />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </template>
    <template v-else>{{ error }}</template>
</template>

<style scoped>
.overflow-x-auto {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;
}

.overflow-x-auto::-webkit-scrollbar {
    display: none;
}

ul > li {
    scroll-snap-align: start;
}
</style>
