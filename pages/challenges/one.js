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
        axios.post('/api/challenge1', {
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

    const md = `
    The easter bunny is on a mission to hand out easter eggs to all the Netlight offices.
    They can fly, and are travelling at a constant speed of \`250 km/h\`.

    They start off at the Oslo office, and in between each office visit they need to go back to Oslo to refill their egg basket.
    They also need to return to the Oslo office after delivering all eggs.

    How many hours does it take the easterbunny to deliver *eggs* to every office?
    Round the answer *down* to the nearest whole number!

    (hint: Haversine)

    // Netlight offices
    {
        "stockholm":  [59.331726830276956, 18.067817098716517],
        "oslo":       [59.91321410876051, 10.742254741062208],
        "helsinki":   [60.16880404846868, 24.947663814086035],
        "copenhagen": [55.679304275629484, 12.574170725592133],
        "munich":     [48.139037649070744, 11.590205325386556],
        "hamburg":    [53.547770747735655, 9.992331342727375],
        "berlin":     [52.50279609772812, 13.407836454338398],
        "frankfurt":  [50.111770546640464, 8.673065083109826],
        "zurich":     [47.36438155339876, 8.535867869546923]
    }
    `

    return (
        <>
            {
            !correctAnswer && 
            <div>
                <div>
                <h1>Eggs of Europe</h1>
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
                <div className={style.youDidIt} onClick={() => {setCorrectAnswer(false)}}>
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