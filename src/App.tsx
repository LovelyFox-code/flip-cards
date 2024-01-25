import './App.css'
import {Cards} from "./components/Cards/Cards.tsx";
import {Quiz} from "./components/Quiz/Quiz.tsx";


function App() {

    return (
        <div className="container">
            <Cards/>
            <Quiz/>
        </div>

    )
}

export default App
