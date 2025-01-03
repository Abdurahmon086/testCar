import { Car } from "~/types";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const url = config.public.API_BASE_URL;

    const res = await $fetch<Car[]>(`${url}/cars`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res;
});
