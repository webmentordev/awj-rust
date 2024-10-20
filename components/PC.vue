<template>
    <section
        class="fixed top-0 left-0 px-4 bg-dark bg-opacity-70 flex items-center justify-center z-50 w-full h-full backdrop-blur-md"
        @click.self="$emit('pc-toggle')">
        <div class="max-w-lg w-full p-6 bg-dark-100 rounded-lg text-white">
            <div class="text-center">
                <h1 class="text-3xl mb-2">AWJ PC Rust Server</h1>
                <p class="text-white/80">List of our PC servers for Rust on Steam only</p>
            </div>
            <h2 class="text-2xl mb-1">Our PVE Server</h2>
            <p class="p-3 rounded-lg bg-dark mb-3">
                connect 185.206.151.242:28025
            </p>
            <h2 class="text-2xl mb-1">Our PVP Server</h2>
            <p class="p-3 rounded-lg bg-dark mb-3">
                connect 185.206.151.242:28015
            </p>
        </div>
    </section>
</template>