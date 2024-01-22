import './App.css'
import {FlipCard} from "./components/FlipCard.tsx";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";
import {lang} from "./dataVacabulary.json"


function App() {
    const [isEnglish, setIsEnglish] = useState('');
    const [isDutch, setIsDutch] = useState('');
    const [translations, setTranslations] = useState<{ nl: string; en: string }[]>(lang);

    const handleAddTranslation = () => {
        if (isEnglish && isDutch) {
            setTranslations((prevTranslations) => [
                ...prevTranslations,
                {nl: isDutch, en: isEnglish},
            ]);
            // Clear input fields after adding a translation
            setIsEnglish('');
            setIsDutch('');
        }
    };

    return (
        <div className="container">
            <h1>Flip cards</h1>
            <div className="input-group">
                <label className="input-group__label" htmlFor="myInput">Add new word to learn here</label>
                <Input value={isEnglish} onHandleChange={setIsEnglish} label="English:"/>
                <Input value={isDutch} onHandleChange={setIsDutch} label="Dutch:"/>
                <Button handleClick={handleAddTranslation}>Add</Button>
            </div>
            <section id="team">
                <div className="grid">
                    {translations.slice(0).reverse().map((lang, index) => {
                        return <FlipCard key={index} nl={lang.nl} en={lang.en}/>
                    })}
                </div>
            </section>
        </div>

    )
}

export default App
