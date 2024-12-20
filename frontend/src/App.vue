<script setup lang="ts">
    import Chatbot from "./components/Chatbot.vue"
</script>

<template>
    <div class="grid p-4 h-dvh place-items-center bg-bg1">
        <main class="relative grid overflow-hidden rounded-lg isolate size-full place-items-center bg-bg2">
            <div
                class="absolute w-4/5 aspect-square -z-10 [background:radial-gradient(closest-side,var(--secondary),#fff0)] blur-3xl translate-y-1/2 bottom-0 rounded-full"
            />
            <Chatbot />
        </main>
    </div>
</template>

<style scoped></style>
