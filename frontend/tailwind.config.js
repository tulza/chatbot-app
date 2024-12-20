/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg1: "var(--bg1)",
                bg2: "var(--bg2)",
                foreground: "var(--foreground)",
                content: "var(--content)",
                secondary: "var(--secondary)",
                button: "var(--button)",
            },
            fontFamily: {
                ClashDisplay: ["ClashDisplay", "sans-serif"],
            },
        },
    },
    plugins: [],
}
