<template>
    <section>
        <div class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('/background.webp');">
            <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
            <div class="relative z-10 px-4">
                <img src="/awj_logo.png" class="m-auto mb-6 max-w-[200px] 480px:max-w-[150px]" alt="Exile Logo">
                <img src="/awj_logo.png" class="max-w-[500px] mb-6" alt="RustyUranium Text Logo">
                <ul class="m-auto flex items-center justify-center">
                    <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="steam://connect/188.244.117.121:28015"><Icon name="bi:steam" class="text-2xl mr-1" /> Connect</NuxtLink>
                    <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="https://discord.gg/53dcrqWP8C" target="_blank"><Icon name="fa6-brands:discord" class="text-2xl mr-1" /> Discord</NuxtLink>
                </ul>
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
            <!-- <p v-if="pending" class="text-center link text-white">Loading...</p>

            <div v-else class="max-w-2xl m-autopx-4 text-white m-auto config">
                <input type="text" class="bg-dark-100 border-white/10 border p-3 w-full mb-3 rounded-lg" placeholder="Search..." v-model="search" @input="findconfig">

                <div class="flex items-center mb-3">
                    <button class="w-full py-2 rounded-xl px-4 mr-3 border-main bg-main/10 border" @click="fetchAllConfigs">With All Configs</button>
                    <button class="w-full py-2 rounded-xl px-4 border-main bg-main/10 border" @click="fetchCommands">With Commands Only</button>
                </div>

                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(config, index) in configs">
                    <p class="w-full p-3 bg-dark rounded-lg">{{ config.config }}</p>
                    <div class="mt-2" v-if="config.commands">
                        <div class="flex items-center" v-if="config.commands.length">
                            <code v-for="command in config.commands">{{ command.command }}</code>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>


        <div class="w-full bg-dark py-12 px-4">
            <h2 class="text-main text-center mb-4 text-5xl">Elite Rank Abilities</h2>
            <p class="text-center text-white mb-3">Here is the list of abilities available for the <br> Elite ranked players. Your donations are highly appriciated. Donate / Buy Rank <NuxtLink to="https://store.rustyuranium.online" class="underline text-main">Here</NuxtLink></p>
            <!-- <p v-if="pending" class="text-center link text-white">Loading...</p>

            <div v-else class="max-w-2xl m-autopx-4 text-white m-auto config">
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(elite, index) in elites">
                    <p class="w-full mb-2 p-3 bg-dark rounded-lg">{{ elite.config }}</p>
                    <div class="flex items-center" v-if="elite.commands">
                        <code v-for="command in elite.commands">{{ command.command }}</code>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script setup>
    // const configs = ref(null);
    // const search = ref("");
    // const array_config = ref(null);
    // const elites = ref(null);
    // let { data, pending } = await useFetch('/api/configs');
    // configs.value = data.value.array;
    // array_config.value = data.value.array;
    // elites.value = data.value.elite;

    // function findconfig(){
    //     configs.value = array_config.value.filter(item =>
    //         item.config.toLowerCase().includes(search.value.toLowerCase())
    //     );
    // }

    // function fetchCommands(){
    //     configs.value = array_config.value.filter((element) => {
    //         if(element.commands){
    //             return element;
    //         }
    //     });
    // }

    // function fetchAllConfigs(){
    //     configs.value = array_config.value;
    // }

</script>