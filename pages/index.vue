<template>
    <section>
        <div class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center"
            style="background-image: url('/home.webp');">
            <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
            <div class="relative z-10 px-4">
                <img src="/logo.webp" class="m-auto mb-6 w-full max-w-[400px] 480px:max-w-[250px] rounded-full"
                    alt="Exile Logo">
                <h1 class="text-center text-white mb-3 text-6xl">AWJ Rust Server</h1>
                <ul class="m-auto flex items-center justify-center">
                    <NuxtLink
                        class="mr-2 py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block"
                        to="steam://connect/185.206.151.242:28025">
                        <Icon name="bi:steam" class="text-2xl mr-1" /> PVE Connect
                    </NuxtLink>
                    <NuxtLink
                        class="mr-2 py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block"
                        to="steam://connect/185.206.151.242:28015">
                        <Icon name="bi:steam" class="text-2xl mr-1" /> PVP Connect
                    </NuxtLink>
                </ul>
                <!-- <div class="flex w-full items-center justify-center mt-3">
                    <span class="m-auto cursor-pointer py-3 rounded hover:text-black hover:bg-main transition-all px-6 bg-dark link text-white text-xl inline-block" @click="console_toggle = !console_toggle"><Icon name="game-icons:console-controller" class="text-2xl mr-1" /> Console</span>
                </div> -->
            </div>
            <div class="bottom-3 right-3 absolute z-20">
                <div class="flex items-center">
                    <h4 class="text-white mr-3 text-2xl link">Read More</h4>
                    <div class="rounded-full bg-main p-2">
                        <img src="https://api.iconify.design/ic:outline-keyboard-double-arrow-down.svg" alt="Arrow Down"
                            width="30">
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full bg-dark py-12 px-4">
            <h2 class="text-main text-center mb-4 text-5xl">Our Server Configuration</h2>
            <p class="text-center text-white mb-3">Here is the configuration that we use for our server. <br> Feel free
                to read all. It may come handy because we have so much <br> to offer. Commands are also mentioned below
                the configuration</p>
            <div class="max-w-2xl m-autopx-4 text-white m-auto config">
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4">
                    <p class="w-full p-3 bg-dark rounded-lg">AWJ PVP Info</p>
                    <div class="p-3">
                        <h3 class="text-2xl">Welcome To AWJ Rust.</h3>
                        <p class="leading-8 flex flex-col">
                            Our Servers Are Hosted On Dedicated Server For Smoother Connection.
                            This Is A PVP Server Which Means You Can Be Killed By Other Players
                            Anytime.
                            PVP Can Be Brutal, With Toxic Clans, Players, And Large Zergs Making The Experience
                            Unenjoyable.
                            However, This Server Is Not Like That Its A Chilled Place For New/Old Players.
                            We Have Many Things Added To Make The Server Fun And Assist Newer Players,
                            There Are Many Random Events And A Skill Tree Where Player Can Upgrade Their Stats.
                            AWJ is Currently Running A New Test Map So Any Issues You Find Please Report Them In
                            Discord.
                            <br>
                            Information About Plugins And Addons Are Displayed In Discord
                            <br>
                        </p>
                        <code class="mt-3">Server IP: 185.206.151.242:28015</code>
                    </div>
                </div>

                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4">
                    <p class="w-full p-3 bg-dark rounded-lg">AWJ PVE/PVP Info</p>
                    <div class="p-3">
                        <p class="leading-8 flex flex-col">
                            Join The Ultimate Rust experience designed for both competitive and casual players.
                            Experience a perfect blend of PVP and PVE action, <br>
                            Whether you're a seasoned survivor or just getting started, our server is packed with
                            features
                            To ensure non-stop action, progression, and customization,
                            To make every playthrough Enjoyable For You And Your Team.
                            Whether you're looking to dominate in raids, build your dream base or engage in exciting
                            events,
                            <br>
                            AWJ offers something for everyone, Don't miss out on the action, grab your gear and jump in!
                            <br>
                        </p>
                        <code class="mt-3">Server IP: 185.206.151.242:28025</code>
                    </div>
                </div>
            </div>


            <!-- <p v-if="pending" class="text-center link text-white">Loading...</p>
            <div v-else class="max-w-2xl m-autopx-4 text-white m-auto config">
                <div class="flex items-center mb-3">
                    <button class="w-full py-2 rounded-xl px-4 mr-3 border-main bg-main/10" :class="{ 'border': server == 'pvp' }" @click="server = 'pvp'">PVP</button>
                    <button class="w-full py-2 rounded-xl px-4 border-main bg-main/10" :class="{ 'border': server == 'pve' }" @click="server = 'pve'">PVE</button>
                </div>
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(config, index) in configs.pve" :key="index" v-if="server == 'pve'">
                    <p class="w-full p-3 bg-dark rounded-lg">{{ config }}</p>
                </div>
                <div class="p-3 py-4 rounded-lg bg-dark-100 mb-4" v-for="(config, index) in configs.pvp" :key="index">
                    <p class="w-full p-3 bg-dark rounded-lg">{{ config }}</p>
                </div>
            </div> -->
        </div>
        <Console v-if="console_toggle" @console-toggle="console_toggle = !console_toggle" />
    </section>
</template>

<script setup>
const configs = ref(null);
const server = ref("pvp");

let { data, pending } = await useFetch('/api/config');
configs.value = data.value;

const console_toggle = ref(false);

</script>