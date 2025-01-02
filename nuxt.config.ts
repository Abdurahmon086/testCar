// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    ssr: true,
    modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
    css: ["~/assets/css/main.css"],
    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
        configPath: "tailwind.config",
        exposeConfig: {
            level: 2,
        },
        viewer: true,
    },
    icon: {
        serverBundle: {
            collections: ["uil", "mdi"],
        },
    },
});
