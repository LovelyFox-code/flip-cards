import {useCallback, useState} from "react";
import {questions} from "../../data/questionsData.json"
import "./Quiz.css"
import image from "../../assets/quiz-complete.png"
import {QuestionTimer} from "./QuestionTimer.tsx";

export function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState('answered')
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
        setTimeout(() => {
            if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                selectedAnswer('wrong')
            }
            setTimeout(() => {
                setAnswerState('')
            }, 2000)
        }, 1000)
    }, [activeQuestionIndex])
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),
        [handleSelectAnswer]
    )
    if (quizIsComplete) {
        return <div id="summary">
            <img src={image} alt="trophy"/>
            <h2>Quiz Completed!</h2>
        </div>
    }
    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <div className="quiz">
            <div id="questions">
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer}/>
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClass = '';
                        if (answerState === 'answered' && isSelected) {
                            cssClass = 'selected'
                        }
                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClass = answerState
                        }
                        return (
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                                    {answer}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
