<script lang="ts" setup>
import { header_top_data, socialData } from "~/constants";

const isOpen = ref(false);
const handelOpen = (value: boolean) => {
    isOpen.value = value;
};
</script>
<template>
    <div>
        <img
            src="/images/menu.svg"
            alt="menu icon"
            class="text-lg text-black cursor-pointer block xl:hidden"
            @click="handelOpen(!isOpen)"
        />
        <template v-if="isOpen">
            <div class="block lg:hidden absolute top-20 left-0 bg-white w-full h-fit container shadow-lg z-[888]">
                <div class="border-t"></div>

                <nav class="mt-5 flex justify-between">
                    <ul class="flex flex-col gap-5">
                        <li v-for="item in header_top_data" :key="item.id" class="text-sm leading-4">
                            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                    <div class="flex items-start gap-2">
                        <p class="text-[13px] flex-center">RU <Icon name="uil:angle-down" class="text-[13px]" /></p>
                        <Icon name="si:notifications-thick-line" class="mt-0.5 cursor-pointer block xl:hidden" />
                    </div>
                </nav>

                <nav class="my-5">
                    <ul class="flex flex-col gap-2 xl:hidden text-[#050B20] leading-4">
                        <li class="flex items-center justify-between bg-[#F6F6F6] py-5 px-4 cursor-pointer">
                            Автомобили
                            <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-xl align-middle" />
                        </li>
                        <li class="flex items-center justify-between bg-[#F6F6F6] py-5 px-4 cursor-pointer">
                            Коммерческий транспорт
                            <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-xl align-middle" />
                        </li>
                        <li class="flex items-center justify-between bg-[#F6F6F6] py-5 px-4 cursor-pointer">
                            Мотоциклы
                            <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-xl align-middle" />
                        </li>
                    </ul>
                </nav>
                <div class="text-lightGray flex flex-col text-[13px] gap-3">
                    <NuxtLink to="tel:+7 (777) 777-77-77" class="flex-center gap-1">
                        <Icon name="uil:phone" class="text-lg" />
                        <p>+7 (777) 777-77-77</p>
                    </NuxtLink>
                    <NuxtLink to="mailTo:Info@mail.ru" class="flex-center gap-1">
                        <Icon name="uil:envelope" class="text-lg" />
                        <p>Info@mail.ru</p>
                    </NuxtLink>
                </div>

                <div class="mt-2 flex-center gap-4">
                    <ul class="flex-center gap-4">
                        <li v-for="item in socialData" :key="item.id">
                            <NuxtLink :to="item.link" target="_blank">
                                <Icon :name="item.icon_name" class="align-middle mb-1" style="color: #989898" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-2 xl:hidden my-5">
                    <ShareButton color="!w-full !text-[13px] bg-secondary">Регистрация</ShareButton>
                    <ShareButton color="!w-full !bg-[#EEEEEE] !text-[#ACACAC] !text-[13px]">Войти</ShareButton>
                </div>
            </div>
        </template>
    </div>
</template>

<style></style>
