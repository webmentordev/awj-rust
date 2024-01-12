<template>
    <section>
        <div class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('/home.webp');">
            <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
            <div class="relative z-10 px-4">
                <img src="/logo.webp" class="m-auto mb-6 w-full max-w-[400px] 480px:max-w-[250px] rounded-full" alt="Exile Logo">
                <h1 class="text-center text-white mb-3 text-6xl">AWJ Rust Servers</h1>
                <ul class="m-auto flex items-center justify-center">
                    <NuxtLink class="mr-2 py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block" to="steam://connect/156.236.84.209:28015"><Icon name="bi:steam" class="text-2xl mr-1" /> 2X PVE Connect</NuxtLink>
                    <NuxtLink class="mr-2 py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block" to="steam://connect/156.236.84.197:28040"><Icon name="bi:steam" class="text-2xl mr-1" /> 3X PVP Connect</NuxtLink>
                </ul>
                <div class="flex w-full items-center justify-center mt-3">
                    <span class="m-auto cursor-pointer py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block" @click="console_toggle = !console_toggle"><Icon name="game-icons:console-controller" class="text-2xl mr-1" /> Console</span>
                </div>
            </div>
            <div class="bottom-3 right-3 absolute z-20">
                <div class="flex items-center">
                    <h4 class="text-white mr-3 text-2xl link">Read More</h4>
                    <div class="rounded-full bg-main p-2">
                        <img src="https://api.iconify.design/ic:outline-keyboard-double-arrow-down.svg" alt="Arrow Down" width="30">
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full bg-dark py-12 px-4">
            <h2 class="text-main text-center mb-4 text-5xl">Our Server Configuration</h2>
            <p class="text-center text-white mb-3">Here is the configuration that we use for our server. <br> Feel free to read all. It may come handy because we have so much <br> to offer. Commands are also mentioned below the configuration</p>
            <p v-if="pending" class="text-center link text-white">Loading...</p>
            <div v-else class="max-w-2xl m-autopx-4 text-white m-auto config">
                <div class="flex items-center mb-3">
                    <button class="w-full py-2 rounded-xl px-4 mr-3 border-main bg-main/10" :class="{ 'border': server == 'pvp' }" @click="server = 'pvp'">PVP</button>
                    <button class="w-full py-2 rounded-xl px-4 border-main bg-main/10" :class="{ 'border': server == 'pve' }" @click="server = 'pve'">PVE</button>
                </div>
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(config, index) in configs.pve" :key="index" v-if="server == 'pve'">
                    <p class="w-full p-3 bg-dark rounded-lg">{{ config }}</p>
                </div>
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(config, index) in configs.pvp" :key="index" v-if="server == 'pvp'">
                    <p class="w-full p-3 bg-dark rounded-lg">{{ config }}</p>
                </div>
            </div>
        </div>
        <Console v-if="console_toggle" @console-toggle="console_toggle = !console_toggle" />
    </section>
</template>

<script setup>
    const configs = ref(null);
    const server = ref("pve");
    
    let { data, pending } = await useFetch('/api/config');
    configs.value = data.value;
    
    const console_toggle = ref(false);

</script>