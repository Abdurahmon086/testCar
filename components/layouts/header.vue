<script lang="ts" setup></script>
<template>
    <div class="container py-[12px] flex-center justify-between">
        <ShareLogo />
        <nav class="ml-[29px]">
            <ul class="hidden xl:flex items-center gap-5 text-[#010101] leading-[18px]">
                <li class="cursor-pointer">
                    Автомобили <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-lg align-middle" />
                </li>
                <li class="cursor-pointer">
                    Коммерческий транспорт
                    <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-lg align-middle" />
                </li>
                <li class="cursor-pointer">
                    Мотоциклы <Icon name="uil:angle-right-b" class="text-secondary -ml-1 text-lg align-middle" />
                </li>
            </ul>
        </nav>
        <div class="flex items-center gap-4">
            <div class="for-form-avto text-[#989898] py-4 pr-4 w-[193px] md:w-[345px] relative">
                <Icon name="uil:search" class="text-lg absolute top-5 left-2 sm:left-4" />
                <input
                    type="search"
                    class="bg-[#f4f4f4] w-full outline-none pl-[36px] sm:pl-[63px] text-[13px]"
                    placeholder="Поиск по названию"
                />
            </div>
            <ShareMenu />
        </div>
        <Icon name="si:notifications-thick-line" class="text-lg cursor-pointer hidden xl:block" />
        <div class="gap-4 hidden xl:flex items-center">
            <p class="cursor-pointer text-[15px] lead ing-[22px]">Войти</p>
            <ShareButton>Регистрация</ShareButton>
        </div>
    </div>
</template>

<style></style>
