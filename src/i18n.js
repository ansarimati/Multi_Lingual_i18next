import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    fallbackLng : "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome",
                description: {
                    line1: "You'are Wathing <1>{{channel}}</1> YouTube Channel",
                    line2: "This is an Internationalisation Tutorial"
                }
            },
        },
        fr: {
            translation: {
                greeting: "Bonjour bienvenue",
                description: {
                    line1: "Vous regardez la chaîne YouTube <1>{{channel}}</1>",
                    line2: "Ceci est un tutoriel d'internationalisation"
                }
            }  
        },
        hi: {
            translation: {
                greeting: "नमस्ते, स्वागत है",
                description: {
                    line1: "यू आर वाथिंग <1>{{channel}}</1> यूट्यूब चैनल",
                    line2: "यह एक अंतर्राष्ट्रीयकरण ट्यूटोरियल है"
                }
            }
        },
        ar: {
            translation: {
                greeting: "مرحبا أهلا وسهلا",
                description: {
                    line1: "أنت تشاهد قناة {{channel}} على YouTube",
                    line2: "هذا هو البرنامج التعليمي للتدويل"
                }
            }
        }   
    }
})

