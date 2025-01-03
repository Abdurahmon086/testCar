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
    <section class="mt-12">
        <div class="container">
            <div class="rounded-xl bg-gradient-to-r from-[#3593F3] to-[#0C74DF] text-white">
                <div class="bg-[url('/images/bg1.png')] bg-no-repeat bg-right pt-5 pb-8 px-10">
                    <h4 class="text-[28px] leading-8 font-medium">Не можете определится с выбором?</h4>
                    <p class="text-[15px] leading-5 max-w-[383px] mt-1 mb-3">
                        Оставьте заявку, и наши менеджеры проконсультируют вас!
                    </p>
                    <ShareButton>Оставить заявку</ShareButton>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-24">
        <div class="container">
            <h3 class="main-title">Новости</h3>
            <ul class="grid grid-cols-3 gap-6">
                <li v-for="(item, i) in 3" :key="i">
                    <CardsNew />
                </li>
            </ul>
        </div>
    </section>
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
