<template>
    <nav class="fixed top-0 left-0 w-full z-40 mt-2 px-4">
        <div class="max-w-4xl m-auto flex items-center rounded-md p-2 px-3 justify-between bg-black bg-opacity-30 backdrop-blur-lg border border-white/10">
            <NuxtLink to="/" class="flex items-center">
                <img src="/awj_logo.png" width="45" alt="AWJ Logo">
                <span class="ml-3 text-xl text-white/90 link">AWJ Rust Servers</span>
            </NuxtLink>
            <ul class="flex items-center text-white/90 link mr-3 690px:hidden">
                <NuxtLink class="ml-7" to="/">Home</NuxtLink>
                <NuxtLink class="ml-7" to="/staff">Staff</NuxtLink>
                <NuxtLink class="ml-7" to="/servers">Servers</NuxtLink>
                <NuxtLink class="ml-7" to="/wipe">Wipe</NuxtLink>
                <NuxtLink class="ml-7" to="/rules">Rules</NuxtLink>
                <NuxtLink class="ml-7" to="https://rustyuranium.tip4serv.com/" target="_blank">Store</NuxtLink>
                <NuxtLink class="ml-7" to="/discord">Discord</NuxtLink>
            </ul>
            <div class="690px:block hidden relative">
                <Icon name="majesticons:text-align-left" class="text-main text-3xl rotate-180" @click="show = !show" />
                <ul class="absolute w-[200px] text-start right-0 top-9 rounded-lg text-white flex flex-col bg-dark p-6 link" v-if="show">
                    <NuxtLink class="pb-3 border-b border-dark-100" to="/">Home</NuxtLink>
                    <NuxtLink class="py-3 border-b border-dark-100" to="/staff">Staff</NuxtLink>
                    <NuxtLink class="py-3 border-b border-dark-100" to="/servers">Servers</NuxtLink>
                    <NuxtLink class="py-3 border-b border-dark-100" to="/wipe">Wipe</NuxtLink>
                    <NuxtLink class="py-3 border-b border-dark-100" to="/rules">Rules</NuxtLink>
                    <NuxtLink class="py-3 border-b border-dark-100" to="https://rustyuranium.tip4serv.com/" target="_blank">Store</NuxtLink>
                    <NuxtLink class="pt-3" to="/discord">Discord</NuxtLink>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return {
                show: false
            }
        }
    }
</script>