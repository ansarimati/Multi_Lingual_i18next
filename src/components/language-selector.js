import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "Englis" },
    { code: "hi", lang: "Hindi" },
    { code: "fr", lang: "French"},
    { code: "ar", lang: "Arabic" }
];


const LanguageSelector = () => {

    const {i18n} = useTranslation();

    const changeLanguage = (language_code) => {
        i18n.changeLanguage(language_code);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language])

    return (
        <div className="btn-container">
            {
                languages.map((item) => (
                    <button 
                        key={item.code} 
                        className={item.code === i18n.language ? "selected" : ""}  //i18.language will give currently selected language
                        onClick={()=> changeLanguage(item.code)}
                    >
                        {item.lang}
                    </button>
                ))
            }
        </div>
    )
};

export default LanguageSelector;