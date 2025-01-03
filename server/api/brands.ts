import { CarBrand } from "~/types";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const url = config.public.API_BASE_URL;

    const res = await $fetch<CarBrand[]>(`${url}/marks`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res;
});
