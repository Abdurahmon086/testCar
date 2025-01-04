import { Car } from "~/types";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const url = config.public.API_BASE_URL;
    const body = await readBody(event);
    console.log(body);

    const res = await $fetch<Car[]>(`${url}/all-filter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    console.log(res);

    return res;
});
