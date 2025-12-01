import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore('language', () => {
    const language = ref('en');

    function setLanguage(lang: string) {
        language.value = lang;
    }

    return { language, setLanguage };
});