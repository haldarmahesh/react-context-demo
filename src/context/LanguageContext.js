import React from 'react';
export const labels = {
    en: {
        themeSelectLabel: 'Select mode',
        langSelectLabel: 'Select language',
        body: 'Hey, right now you are in demo page of React context API.'
    },
    fr: {
        themeSelectLabel: 'Sélectionne un thème',
        langSelectLabel: 'Choisir la langue',
        body: "Hé, maintenant vous êtes sur la page de démonstration de l'API de contexte de réaction."
    },
    sp: {
        themeSelectLabel: 'Seleccione el tema',
        langSelectLabel: 'Seleccione el idioma',
        body: 'Oye, ahora mismo estás en la página de demostración de la API de contexto de React.'
    },
    gr: {
        themeSelectLabel: 'Auswahlmodus',
        langSelectLabel: 'Sprache auswählen',
        body: 'Hey, im Moment bist du auf der Demo-Seite von React Context API.'
    },
    hn: {
        langSelectLabel: 'भाषा चुनिए',
        themeSelectLabel: 'चुनिंदा विषय',
        body: 'अरे, अभी आप प्रतिक्रिया संदर्भ API के डेमो पेज में हैं।'
    }
}
const LangContext = React.createContext(labels.fr);
export default LangContext;