import { New } from "~/types";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const url = config.public.API_BASE_URL;

    const res = await $fetch<New[]>(`${url}/news`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res;
});
