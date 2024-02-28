<template>
    <section class="fixed top-0 left-0 px-4 bg-dark bg-opacity-70 flex items-center justify-center z-50 w-full h-full backdrop-blur-md" @click.self="$emit('console-toggle')">
        <div class="max-w-lg w-full p-6 bg-dark-100 rounded-lg text-white">
            <div class="text-center">
                <h1 class="text-3xl mb-2">AWJ Console Rust Servers</h1>
                <p class="text-white/80">List of our Console servers for Rust console only</p>
            </div>
            <!-- <h2 class="text-2xl mb-1">Europe</h2>
            <p class="p-3 rounded-lg bg-dark mb-3">
                AWJ PVP 3x/Solo/Duo/No BP/Monthly
            </p> -->
            <h2 class="text-2xl mb-1">United States</h2>
            <p class="p-3 rounded-lg bg-dark mb-3">
                AWJ PVP 3x/No BP/Monthly
            </p>
            <ul class="list-disc ml-6">
                <li>No Blueprints</li>
                <li>Instant Craft</li>
                <li>Demolish Hammer</li>
                <li>Longer Days Short Nights</li>
                <li>More Wildlife</li>
                <li>30 Minutes Respawn On Bradley</li>
                <li>5 Minutes Locked Crate Timer</li>
            </ul>
        </div>
    </section>
</template>