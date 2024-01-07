import i18n from "i18next";
import LanguaageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguaageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome"
            },
        },
        fr: {

        },
        hi: {

        }
    }
})

