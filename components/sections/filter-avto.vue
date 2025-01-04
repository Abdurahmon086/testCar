<script lang="ts" setup>
import type { CarBrand } from "~/types";

interface Option {
    id: number;
    name: string;
    value: string;
}

const { data } = await useAsyncData(
    "filer-avto",
    async () => {
        const [brands] = await Promise.all([$fetch<CarBrand[]>("/api/brands")]);
        return { brands };
    },
    { deep: true }
);

const formState = reactive({
    year: "",
    price: "",
    selected: "all",
    order: false,
    cash: false,
    mark: data.value?.brands[0].mark_name ?? "",
    model: "Hyundai",
    country: "USA",
    result: null as any,
});

const loading = ref(false);

// Handle selection
const options: Option[] = [
    { id: 1, name: "Все", value: "all" },
    { id: 2, name: "Новые", value: "new" },
    { id: 3, name: "С пробегом", value: "used" },
];

// Select handler
const selectOption = (option: string) => (formState.selected = option);

// Filter input
const sanitizeInput = (value: string) => value.replace(/[^0-9\-]/g, "");

// Clear form
const clearForm = () => {
    Object.assign(formState, {
        year: "",
        price: "",
        selected: "all",
        mark: data.value?.brands[0].mark_name ?? "",
        model: "Hyundai",
        country: "USA",
        result: null,
    });
};

// Submit form
const submitForm = async () => {
    try {
        loading.value = true;
        const formData = {
            ...formState,
            maxYear: formState.year || 0,
            minPrice: formState.price.split(" - ")[0] || 0,
            maxPrice: formState.price.split(" - ")[1] || 0,
            page: 1,
            pageSize: 10,
        };
        const { data } = await useFetch("/api/all-filter", { method: "POST", body: formData });
        formState.result = data;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="container">
        <h3 class="main-title">Подбор авто</h3>
        <form class="rounded-xl bg-white p-5 shadow-lg w-full" @submit.prevent="submitForm">
            <div class="flex-center gap-7">
                <div class="flex-center gap for-form-avto text15 text-[#010101]">
                    <div
                        v-for="item in options"
                        :key="item?.id"
                        class="py-5 px-8 cursor-pointer"
                        :class="{ active: formState.selected === item?.value }"
                        @click="selectOption(item?.value)"
                    >
                        {{ item?.name }}
                    </div>
                </div>
                <div class="flex-center flex-row-reverse gap-2">
                    <label for="cash" class="label14">В наличии</label>
                    <input type="checkbox" name="cash" id="cash" v-model="formState.cash" />
                </div>
                <div class="flex-center flex-row-reverse gap-2">
                    <label for="order" class="label14">Под заказ</label>
                    <input type="checkbox" name="order" id="order" v-model="formState.order" />
                </div>
            </div>

            <div class="grid grid-cols-5 space-x-6 mt-7">
                <div class="flex flex-col gap-1 custom-select relative">
                    <label for="mark" class="label14 mb-1">Выберите марку</label>
                    <select
                        name="mark"
                        id="mark"
                        class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]"
                        v-model="formState.mark"
                    >
                        <option v-for="item in data?.brands ?? []" :key="item?.id" :value="item?.mark_name">
                            {{ item?.mark_name }}
                        </option>
                    </select>
                </div>
                <div class="flex flex-col gap-1 custom-select relative">
                    <label for="model" class="label14 mb-1">Выберите модель</label>
                    <select
                        name="model"
                        id="model"
                        class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]"
                        v-model="formState.model"
                    >
                        <option value="Hyundai">Hyundai</option>
                        <option value="Kia">Kia</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1 custom-select relative">
                    <label for="country" class="label14 mb-1">Страна</label>
                    <select
                        name="country"
                        id="country"
                        class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]"
                        v-model="formState.country"
                    >
                        <option value="USA">USA</option>
                        <option value="Russian">Russian</option>
                        <option value="China">China</option>
                        <option value="Korea">Korea</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="year" class="label14 mb-1">Год</label>
                    <input
                        id="year"
                        class="for-form-avto py-6 px-5 placeholder15"
                        type="text"
                        placeholder="0 - 2024"
                        v-model="formState.year"
                        @input="formState.year = sanitizeInput(formState.year)"
                    />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="price" class="label14 mb-1">Цена</label>
                    <input
                        id="price"
                        class="for-form-avto py-6 px-5 placeholder15"
                        type="text"
                        placeholder="3 000 000 - 4 500 000"
                        v-model="formState.price"
                        @input="formState.price = sanitizeInput(formState.price)"
                    />
                </div>
            </div>
            <div class="flex-center justify-end space-x-8 mt-6">
                <button class="flex-center gap-1 text-sm leading-[18px] text-grayer" @click="clearForm">
                    Сбросить
                    <Icon name="uil:times" class="text-grayer" />
                </button>
                <ShareButton :disabled="loading"> Предложений</ShareButton>
            </div>
        </form>
    </div>
</template>
