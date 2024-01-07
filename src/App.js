import './App.css';
import { Trans, useTranslation } from 'react-i18next';
import LanguageSelector from './components/language-selector';

function App() {

  const { t } = useTranslation();

  // const { line1, line2 } = t("description", {
  //   channel: "RoadSideCoder with Mati"
  // });

  const { line1, line2 } = t("description") 
  
  return (
    <div className="container">
      <h1>{t("greeting")}</h1>
      <h3>{line1}</h3>
      {/* <Trans 
        // i18nKey={"description.line1"} or we do as 
        i18n={line1}
        values={{
          channel: "RoadsideCoderr",
        }}
        components={{
          1: <b />
        }}
      /> */}
      <h3>{line2}</h3>
      <LanguageSelector />
    </div>
  );
}

export default App;

// STEPS
// 1) Create i18next.jsx file with i18n instances, put resources
// 2) import i18n in index.js or main.js file
// 3) now we can use useTranslation from react-i18nex for translation e.g t("resoucrse.keyname")
// 4) launguafe-selector.js will do the rest

// 5) when one of the key from resouces are missing => use exact "fallbackLng" in i18n.js file 

// 6) when resources are having objects of descriptions => add "returnObjects: true," in 18n.js file

// 7) for languages written from RIGHT TO LEFT e.g Arabic document.body.dir = i18n.dir(); 

// 8) to use dynamic values use {{ variable name }} in resource file and use object as like line no 9 above;

// 9) to bold or italic that dynamic value, use <Trans />