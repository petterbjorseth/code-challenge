import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Confetti from 'react-confetti'
import { useState } from 'react';
import style from '../../styles/extra.module.css' 

export default function One() {

    let [confetti, setConfetti] = useState(false);
    let [correctAnswer, setCorrectAnswer] = useState(false);
    let [hasAnswered, setHasAnswered] = useState(false);

    function sendAnswer() {
        const answer = document.querySelector('#answer').value
        axios.post('/api/challenge4', {
            answer: answer
        })
        .then((response) => {
            setHasAnswered(true);
            if (response.data.data ===  'true') {
                setConfetti(true);
                setCorrectAnswer(true);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function noConfetti() {
        setConfetti(false);
    }

    function reset() {
        setHasAnswered(false);
        setCorrectAnswer(false);
        setConfetti(false);
    }

    const md = `
    

    The easter numbers are a sequence of positive integers.

    Every number in the sequence is equal to or greater than the previous number.
    The value of the number at the n-th position denotes how many times n occurs in the sequence.

    The sequence starts with the value 1 at position 1 (n=1).
    The first 5 numbers of the sequence are therefore: 1, 2, 2, 3, 3, 4 ...

    Find the sum of the 1000000 (1 million) first numbers in the sequence.
`
    

    return (
        <>
            {
            !correctAnswer && 
            <div>
                <div>
                <h1>Easter numbers</h1>
                {
                    (!correctAnswer && hasAnswered) &&
                    <p className={style.youDidntDoIt}>Wrong answer.. Try again!</p>
                }
                <ReactMarkdown children={md}/>
            </div>
            <div>
                <input type="text" id="answer" name="answer" label="text"/>
                <button onClick={sendAnswer}>Send answer </button>
            </div>
            </div>
            }
            {
                correctAnswer &&
                <div className={style.youDidIt} onClick={reset}>
                    <p>YOU DID IT!! WELL DONE :-D (click here to view challenge text again)</p>
                    <img src='/success1.jpg'/>
                </div>
            }
            {
                confetti && <Confetti numberOfPieces={10000} gravity={0.1} tweenDuration={10000} onConfettiComplete={noConfetti} recycle={false}/>
            }
        </>
    )
}