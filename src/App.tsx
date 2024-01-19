import './App.css'
import {FlipCard} from "./components/FlipCard.tsx";
import {useState, useTransition} from "react";

function App() {
    const [isFlip, setIsFlip] = useState([{nl:"Aanraken", en:"to touch"},
        {nl:"Aanraken", en:"to touch"},
        {nl:"Controleren", en:"check"},
        {nl:"Duwen ", en:"puch"},
        {nl:"Halen", en:"to fetch"},
        {nl:"İnnemen", en:"to take"},
        {nl:"Kijken  ", en:"sound"},
        {nl:"Klinken ", en:"puch"},
        {nl:"laten zien ", en:"show"},
        {nl:"Lopen ", en:"walk"},
        {nl:"Lijken op ", en:"look a like"},
        {nl:"Leren      ",en:      "to learn"},
        {nl:"Missen     ",en:    "to miss"},
        {nl:"Openen     ",en:   "to open"},
        {nl:"Oppakken   ",en: "picking up"},
        {nl:"Opschrijven",en:"write down"},
        {nl:"Praten     ",en:     "to talk"},
        {nl:"Raken      ",en:     "to hit"},
        {nl:"Rekenen    ",en:   "to calculate"},
        {nl:"Ruiken     ",en:     "to smell"},
        {nl:"Rijden     ",en:      "to ride"},
        {nl:"Slapen     ",en:     "to sleep"},
        {nl:"Schieten   ",en:    "to shoot"},
        {nl:"Schijnen   ",en:      "shine"},
        {nl:"Sterven    ",en:      "to die"},
        {nl:"Sturen     ",en:       "to send"},
        {nl:"Spelen     ",en:       "to play"},
        {nl:"Staan      ",en:        "to stand"},
        {nl:"Tekenen    ",en:     "draw"},
        {nl:"Trekken " ,en:  "pull"},
        {nl:"Vertellen",en:  "to tell"},
        {nl:"Verzorgen",en:"take care of"},
        {nl:"Vinden"   ,en:   "find"},
        {nl:"Vliegen"  ,en:   "fly"},
        {nl:"Vragen"   ,en:   "ask"},
        {nl:"Werken"   ,en:  "to work"},
        {nl:"Wonen"    ,en:  "live"},
        {nl:"Wijzen", en:   "point"},
        {nl:"Zingen", en:   "to sing"},
        {nl:"Zitten", en:    "to sit"},
        {nl:"Zoeken", en: "search"},
    ]);

  return (
    <>
        <h1>Flip cards</h1>
        <section id="team">
            <div className="container">
                <div className="grid">
                    {isFlip.map((lang, index)=>{
                        return <FlipCard key={index} nl={lang.nl} en={lang.en}/>
                    })}

                </div>
            </div>
        </section>
    </>
  )
}

export default App
