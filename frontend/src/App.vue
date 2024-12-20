<script setup lang="ts">
    import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
    <div class="grid h-dvh place-items-center bg-slate-200">
        <div class=""><HelloWorld msg="Vite + Vue + TS" /></div>
    </div>
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
