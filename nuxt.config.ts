// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }
            ],
            link: [
                {
                    href: "https://api.fontshare.com/v2/css?f[]=rx-100@400&display=swap",
                    rel: "stylesheet"
                }
            ]
        }
    },
    css: ["~~/styles/main.css"]
});
