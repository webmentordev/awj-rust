<template>
    <section class="w-full bg-center bg-cover min-h-screen relative" style="background-image: url('/server_background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/70 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-6xl m-auto py-[140px] px-4">
            <h1 class="text-6xl text-white text-center">Our Servers</h1>
            <p class="text-white/80 text-center">Our Current Selection Of Rust Servers</p>

            <div class="grid grid-cols-1 gap-3 800px:grid-cols-1" v-if="server_pvp">
                <!-- <div class="flex flex-col p-3 max-w-lg m-auto rounded-lg mt-6 bg-dark relative">
                    <h3 v-if="server_pvp.status == 'online'" class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-green-600 h-fit w-fit rounded-full"></span> {{ server_pvp.status }}</h3>
                    <h3 v-else class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-red-600 h-fit w-fit rounded-full"></span> {{ server_pvp.status }}</h3>
                    <img :src="server_pvp.details.rust_headerimage" class="rounded-lg" alt="Rusty Uranium Header Image">
                    <div class="p-3">
                        <h2 class="text-white mt-3 text-2xl">{{ server_pvp.name }}</h2>
                        <div class="m-auto 510px:text-start 510px:m-0 w-fit flex 510px:flex-col text-white border-l-main 510px:border-l">
                            <div class="flex text-end 510px:text-start py-2 px-3">
                                <h3 class="border-r border-main px-3">Last Wipe</h3>
                                <span class="px-2">{{ new Date(new Date(server_pvp.details.rust_last_wipe).getTime()).toLocaleDateString('en-US') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-dark-100 overflow-hidden relative mb-2 flex items-center justify-center h-[33px] rounded-lg w-full">
                        <div class="absolute top-0 h-full left-0 bg-green-600" :style="{ width: `${(server_pvp.players / server_pvp.maxPlayers) * 100}%` }"></div>
                        <p class="relative text-white text-sm font-semibold">{{ server_pvp.players }}/{{ server_pvp.maxPlayers }}</p>
                    </div>
                    <NuxtLink :to='`steam://connect/${server_pvp.ip}:${server_pvp.port}`' class="link bg-main w-full text-center py-3 text-lg rounded-lg hover:text-white hover:bg-black transition-all" target="_blank" rel="nofollow">Connect</NuxtLink>
                </div> -->

                <div class="flex flex-col p-3 max-w-lg m-auto rounded-lg mt-6 bg-dark relative">
                    <h3 v-if="server_pve.status == 'online'" class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-green-600 h-fit w-fit rounded-full"></span> {{ server_pve.status }}</h3>
                    <h3 v-else class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-red-600 h-fit w-fit rounded-full"></span> {{ server_pve.status }}</h3>
                    <img src="https://api.rustyuranium.online/api/files/1pmot3sjdt94wfe/8tkcx8sgn9efo1f/awj_banner_2_cgGtny5Vmg.png" class="rounded-lg" alt="Rusty Uranium Header Image">
                    <div class="p-3">
                        <h2 class="text-white mt-3 text-2xl">{{ server_pve.name }}</h2>
                        <div class="m-auto 510px:text-start 510px:m-0 w-fit flex 510px:flex-col text-white border-l-main 510px:border-l">
                            <div class="flex text-end 510px:text-start py-2 px-3">
                                <h3 class="border-r border-main px-3">Last Wipe</h3>
                                <span class="px-2">{{ new Date(new Date(server_pve.details.rust_last_wipe).getTime()).toLocaleDateString('en-US') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-dark-100 overflow-hidden relative mb-2 flex items-center justify-center h-[33px] rounded-lg w-full">
                        <div class="absolute top-0 h-full left-0 bg-green-600" :style="{ width: `${(server_pve.players / server_pve.maxPlayers) * 100}%` }"></div>
                        <p class="relative text-white text-sm font-semibold">{{ server_pve.players }}/{{ server_pve.maxPlayers }}</p>
                    </div>
                    <NuxtLink :to='`steam://connect/${server_pve.ip}:${server_pve.port}`' class="link bg-main w-full text-center py-3 text-lg rounded-lg hover:text-white hover:bg-black transition-all" target="_blank" rel="nofollow">Connect</NuxtLink>
                </div>
            </div>

            <div class="w-full flex items-center justify-center mt-6" v-else>
                <Icon name="eos-icons:loading" class="text-6xl text-main" />
            </div>
        </div>
    </section>
</template>

<script setup>
    const server_pvp = ref(null);
    const server_pve = ref(null);

    await $fetch("https://api.battlemetrics.com/servers/24982679").then(result => {
        server_pvp.value = result.data.attributes;
    });
    await $fetch("https://api.battlemetrics.com/servers/24578823").then(result => {
        server_pve.value = result.data.attributes;
    });

    onMounted(() => {
        
    })
</script>