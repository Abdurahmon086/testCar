// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    ssr: true,
    modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || "https://api.youcarrf.ru",
        },
    },
    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
        configPath: "tailwind.config.js",
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
