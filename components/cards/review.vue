<script lang="ts" setup></script>
<template>
    <article class="w-[290px] md:w-[416px] h-[200px] md:h-[263px] rounded-md md:rounded-xl shadow-md p-2 md:p-5 pb-[17px]">
        <div class="flex-center justify-between">
            <div class="flex-center gap-5">
                <div class="relative w-[49px] md:w-[71px] h-[49px] md:h-[71px] rounded-full">
                    <img src="/images/yandex_logo.png" alt="yandex logo" />
                </div>
                <div class="text-[#8C8C8C] font-medium">
                    <NuxtLink to="/" class="flex-center gap-2">
                        <p class="text-[10px] md:text-sm">Яндекс</p>
                        <Icon name="uil:image-upload" class="text-[10px] md:text-sm" />
                    </NuxtLink>
                    <h5 class="text-[#414141] text-[13px] md:text-[17px]">Александра</h5>
                    <p class="text-[10px] md:text-xs">Апрель 2024</p>
                </div>
            </div>
            <div class="text-[#FFC107] text-base md:text-2xl">
                <Icon name="material-symbols:star" class="" />
                <Icon name="material-symbols:star" class="" />
                <Icon name="material-symbols:star" class="" />
                <Icon name="material-symbols:star" class="" />
                <Icon name="material-symbols:star" class="" />
            </div>
        </div>
        <p class="text-xs leading-[14px] md:leading-[20px] md:text-sm font-medium text-[#414141] mt-2 md:mt-4">
            Я очень доволен покупкой машины в данном автосалоне. Все сотрудники были приветливые и готовы помочь на
            каждом этапе выбора и приобретения авто. Мне предоставили отличные условия по кредитованию, а также сделали
            хорошую скидку на машину. Все документы оформили быстро и без лишних хлопот
        </p>
    </article>
</template>

<style></style>
