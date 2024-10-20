<template>
    <section class="w-full">
        <div class="w-full bg-center bg-cover min-h-[300px] relative"
            style="background-image: url('/rules_background.webp');">
            <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
            <div class="relative z-10 max-w-3xl m-auto pt-[140px] px-4">
                <h1 class="text-5xl text-white text-center">SERVER RULES</h1>
            </div>
        </div>
        <div class="w-full">
            <div class="relative z-10 max-w-3xl m-auto px-4">
                <div class="mt-5 mb-5 p-6 rounded-lg bg-dark text-white/90">
                    <p class="mb-6">Compliance with the mentioned rules is imperative, and it is crucial to be aware
                        that some offenses cannot be appealed. Therefore, it is important to exercise caution and
                        attentiveness to ensure adherence to the rules.</p>
                    <p v-if="pending" class="text-center py-12 px-3">Loading...</p>
                    <div v-else>
                        <!-- <ul class="grid grid-cols-2 gap-3 mb-3">
                            <button @click="active = true" class="text-black font-semibold py-2 rounded-lg" :class="{ 'bg-main': active, 'bg-white': !active }">PVE</button>
                            <button @click="active = false" class="text-black font-semibold py-2 rounded-lg" :class="{ 'bg-main': !active, 'bg-white': active }" >PVP</button>
                        </ul> -->
                        <!-- <div class="bg-dark-100 p-6 rounded-lg" v-if="active">
                            <h3 class="text-3xl">PVE Server Rules</h3>
                            <ul class="rules">
                                <li v-for="(rule, index) in rules.pve" :key="index">{{ rule }}</li>
                            </ul>
                        </div> -->
                        <!-- <div class="bg-dark-100 p-6 rounded-lg">
                            <h3 class="text-3xl">PVP Server Rules</h3>
                            <ul class="rules">
                                <li v-for="(rule, index) in rules.pvp" :key="index">{{ rule }}</li>
                            </ul>
                        </div> -->

                        <div class="bg-dark-100 p-6 rounded-lg">
                            <h3 class="text-3xl">AWJ Server Rules</h3>
                            <ul class="rules">
                                <li v-for="(rule, index) in rules.all" :key="index">{{ rule }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const rules = ref([]);
const active = ref(true);

let { data, pending } = await useFetch('/api/rules');
rules.value = data.value;
</script>