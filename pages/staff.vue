<template>
    <section class="w-full bg-center bg-cover min-h-screen relative"
        style="background-image: url('/staff_background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-4xl m-auto pt-[140px] px-4">
            <h1 class="text-5xl text-white text-center 480px:text-4xl 550px:mb-3">Our Staff Members</h1>
            <div
                class="grid gap-2 grid-cols-3 justify-center mt-5 mb-5 m-auto max-w-4xl 800px:grid-cols-2 550px:grid-cols-1 550px:max-w-[350px]">
                <div class=" text-white w-full">
                    <div class="bg-black p-6 rounded-lg relative group">
                        <img class="mb-5 rounded-md group-hover:scale-125 transition-all w-full" src="/chadder.png">
                        <div class="info">
                            <h2 class="text-center text-xl mb-2">AWJ Chedder</h2>
                            <span
                                class="rounded-sm font-semibold p-2 text-sm px-3 bg-rust inline-block mb-3 w-full text-center">Owner
                                / Server Admin</span>
                            <div class="flex text-md items-center justify-center">
                                <Icon class="mr-2" name="logos:discord-icon" />
                                <span class="text-sm">awjchedder</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" text-white w-full">
                    <div class="bg-black p-6 rounded-lg relative group">
                        <img class="mb-5 rounded-md group-hover:scale-125 transition-all w-full"
                            src="/AWJ_Darcht-img.png">
                        <div class="info">
                            <h2 class="text-center text-xl mb-2">AWJ Dracht</h2>
                            <span
                                class="rounded-sm font-semibold p-2 text-sm px-3 bg-rust inline-block mb-3 w-full text-center">Staff</span>
                            <div class="flex text-md items-center justify-center">
                                <Icon class="mr-2" name="logos:discord-icon" />
                                <span class="text-sm">.dracht</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" text-white w-full">
                    <div class="bg-black p-6 rounded-lg relative group">
                        <img class="mb-5 rounded-md group-hover:scale-125 transition-all w-full" src="/awj-stickle.png">
                        <div class="info">
                            <h2 class="text-center text-xl mb-2">AWJ Stickle</h2>
                            <span
                                class="rounded-sm font-semibold p-2 text-sm px-3 bg-rust inline-block mb-3 w-full text-center">Staff</span>
                            <div class="flex text-md items-center justify-center">
                                <Icon class="mr-2" name="logos:discord-icon" />
                                <span class="text-sm">stacey0719</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>