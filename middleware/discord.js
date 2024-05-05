export default defineNuxtRouteMiddleware(() => {
    return navigateTo('https://discord.gg/awj-rust', { external: true })
})