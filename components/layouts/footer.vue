<script lang="ts" setup>
import { carBrands, footer_countries, footer_menus_data, socialData } from "~/constants";
</script>
<template>
    <div class="container border-t border-[#DADADA] pt-8 pb-3">
        <div class="flex flex-wrap lg:flex-nowrap items-start justify-between gap-8 xl:gap-[86px]">
            <div class="">
                <ShareLogo />
                <ul class="flex-center gap-5 mt-1 text-xl md:text-2xl">
                    <li v-for="item in socialData" :key="item.id">
                        <NuxtLink :to="item.link" target="_blank">
                            <Icon :name="item.icon_name" class="align-middle mb-1" style="color: #989898" />
                        </NuxtLink>
                    </li>
                </ul>
                <p
                    class="mt-2 w-auto xl:w-[313px] text-[12px] md:text-[13px] font-medium text-grayer leading-[14.65px]"
                >
                    © 1-й автоброкер <br />
                    Внесём качественные изменения в Вашу жизнь!
                </p>
            </div>
            <div class="flex items-start flex-wrap md:flex-nowrap md:justify-between w-full lg:w-auto gap-8 xl:gap-20">
                <div class="w-auto xl:w-[103px]">
                    <h4 class="text17-foo">Компания</h4>
                    <ul class="mt-2 md:mt-4 flex flex-col text15-foo gap-x-5 gap-y-3 md:gap-y-4">
                        <li v-for="item in footer_menus_data">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="ml-[60px] sm:ml-0">
                    <h4 class="text17-foo">Aвтомобили</h4>
                    <ul class="mt-4 flex flex-col text15-foo gap-x-5 gap-y-4">
                        <li v-for="item in footer_countries">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h4 class="text17-foo">Марки</h4>
                    <ul class="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-x-5 gap-y-4">
                        <li v-for="item in carBrands" class="w-auto xl:w-[103px] text15-foo">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-9 md:mt-14 flex-center justify-between text-[#5A5A5A] text-[13px] font-medium">
            <p class="hidden md:block w-1/6"></p>
            <p>Политика конфиденциальности</p>
            <p>Сделано в UserTech</p>
        </div>
    </div>
</template>

<style></style>
