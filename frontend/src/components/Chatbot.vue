<script setup lang="ts">
    import { ref } from "vue"
    import { type GenerateContentResponse } from "@google/generative-ai"
    // defineProps<{ msg?: string }>()

    const userInput = ref("")
    const apiResponse = ref<string>("waiting for prompt...")
    const loading = ref(false)

    const host = "http://localhost:3000"

    const fetchData = async () => {
        if (userInput.value) {
            loading.value = true
            try {
                const response = await fetch(`${host}/api/ask`, {
                    body: JSON.stringify({ prompt: userInput.value }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const data = (await response.json()) as GenerateContentResponse
                if (data.candidates?.length === 0) {
                    throw new Error("no candidates found")
                }

                const text = data.candidates![0].content.parts[0].text

                if (!text) {
                    apiResponse.value = "no response"
                }

                apiResponse.value = text!
            } catch (error) {
                console.log(error)
                apiResponse.value = "an error occurred"
            }
        }
        loading.value = false
    }

    const handleSubmit = (event: Event) => {
        event.preventDefault()
        fetchData()
    }
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="p-8 px-10 rounded-lg bg-content w-[500px]">
            <h1 class="text-3xl font-ClashDisplay">Gemini AI</h1>
            <hr class="mb-4" />

            <form @submit="handleSubmit" class="flex flex-col">
                <input
                    v-model="userInput"
                    class="p-2 px-4 mb-4 text-lg bg-white text-bg1 rounded-xl"
                    placeholder="Ask me anything"
                />

                <button
                    type="submit"
                    class="p-2 px-4 text-white bg-blue-500 cursor-pointer rounded-xl hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
        <div class="p-8 px-10 mt-4 text-white bg-black rounded-lg w-[500px]">
            <code>{{ loading ? "loading..." : apiResponse }}</code>
        </div>
    </div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
