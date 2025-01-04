<script lang="ts" setup>
interface Option {
    id: number;
    name: string;
    value: string;
}

const year = ref("");
const price = ref("");
const selected = ref("new");
const order = ref(false);
const cash = ref(false);
const mark = ref("");
const model = ref("");
const country = ref("");
const result = ref<any>(null);

// Handle selection
const options: Option[] = [
    {
        id: 1,
        name: "Все",
        value: "all",
    },
    {
        id: 2,
        name: "Новые",
        value: "new",
    },
    {
        id: 3,
        name: "С пробегом",
        value: "used",
    },
];

const selectOption = (option: string) => {
    selected.value = option;
};

// Filter only numbers
const sanitizeInput = (value: string) => value.replace(/[^0-9\-]/g, "");

// Clear form
const clearForm = () => {
    year.value = "";
    price.value = "";
    selected.value = "new";
    mark.value = "";
    model.value = "";
    country.value = "";
    result.value = null;
    cash.value = false;
    order.value = false;
};

// Submit form
const submitForm = async () => {
    const formData = {
        model: model.value,
        country: country.value,
        statement: selected.value,
        maxYear: year.value || 0,
        minPrice: price.value.split(" - ")[0] || 0,
        maxPrice: price.value.split(" - ")[1] || 0,
        page: 1,
        pageSize: 10,
        // order: order.value,
        // cash: cash.value,
        // mark: mark.value,
    };
    const { data } = await useFetch("/api/all-filter", {
        method: "POST",
        body: formData,
    });
    result.value = data;
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
                        :class="{ active: selected === item?.value }"
                        @click="selectOption(item?.value)"
                    >
                        {{ item?.name }}
                    </div>
                </div>
                <div class="flex-center flex-row-reverse gap-2">
                    <label for="cash" class="label14">В наличии</label>
                    <input type="checkbox" name="cash" id="cash" v-model="cash" />
                </div>
                <div class="flex-center flex-row-reverse gap-2">
                    <label for="order" class="label14">Под заказ</label>
                    <input type="checkbox" name="order" id="order" v-model="order" />
                </div>
            </div>

            <div class="grid grid-cols-5 space-x-6 mt-7">
                <div class="flex flex-col gap-1">
                    <label for="mark" class="label14 mb-1">Выберите марку</label>
                    <select name="mark" id="mark" class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]" v-model="mark">
                        <option value="Hyundai">Hyundai</option>
                        <option value="Kia">Kia</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="model" class="label14 mb-1">ВЫберите модель</label>
                    <select
                        name="model"
                        id="model"
                        class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]"
                        v-model="model"
                    >
                        <option value="Hyundai">Hyundai</option>
                        <option value="Kia">Kia</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="country" class="label14 mb-1">Страна</label>
                    <select
                        name="country"
                        id="country"
                        class="for-form-avto py-6 px-5 text15 text-[#5A5A5A]"
                        v-model="country"
                    >
                        <option value="Hyundai">Hyundai</option>
                        <option value="Kia">Kia</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="year" class="label14 mb-1">Год</label>
                    <input
                        id="year"
                        class="for-form-avto py-6 px-5 placeholder15"
                        type="text"
                        placeholder="0 - 2024"
                        v-model="year"
                        @input="year = sanitizeInput(year)"
                    />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="price" class="label14 mb-1">Цена</label>
                    <input
                        id="price"
                        class="for-form-avto py-6 px-5 placeholder15"
                        type="text"
                        placeholder="3 000 000 - 4 500 000"
                        v-model="price"
                        @input="price = sanitizeInput(price)"
                    />
                </div>
            </div>
            <div class="flex-center justify-end space-x-8 mt-6">
                <button class="flex-center gap-1 text-sm leading-[18px] text-grayer" @click="clearForm">
                    Сбросить
                    <Icon name="uil:times" class="text-grayer" />
                </button>
                <ShareButton>{{ result?.count }} Предложений</ShareButton>
            </div>
        </form>
    </div>
</template>

<style></style>
