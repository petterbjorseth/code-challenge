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
        axios.post('/api/challenge3', {
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

Feedback is awesome! However, now that Netlight is so huge, I can't possibly give everyone feedback this easter. Therefore I have come up with an ingenious plan!
One person starts giving feedback, but must give it to a person that has has a first name that starts with the same letter of their own lastname!

A person may only receive feedback once, and must then give feedback to another person (if possible) based on the rules above.
A person may only appear once in the chain.

Now, what is the longest chain of feedback i can create using these rules, and what is the name this chain starts with? 

For instance, lets say I have the names [Turtle Bunny, Bob Ross, Reodor Felgen, Ratchet Clank, Chihiro Eigo]
Then, some valid chains are

Turtle Bunny -> Bob Ross -> Reodor Felgen (length 3)
Ratchet Clank -> Chihiro Eigo (length 2)
Turtle Bunny -> Bob Ross -> Ratchet Clank -> Chihiro Eigo (length 4)


The length of the longest chain based on these names is 4 and starts with the person Turtle Bunny, so the answer would be Turtle Bunny,4.
What is the length of the longest chain of feedback I can achieve using the names in the following list, and what name does the chain start with?
Please answer in the format Full Name,length, for instance Bob Ross,13. 

[Taylah Naylor, Isla Rojas, Arnav Collins, Harold Andrade, Gus Schneider, Chloe Lucero, Wilhelm Xavier, Annabell Day, Freja Dodd, Chandni Hicks,
Marcel Carney, Bonnie Cleveland, Miguel Levine, Sia Carlson, Clodagh Bateman, Tilly Kaur, Boyd Henry, Garrett Snider, Yousef Nairn, Sanjeev Spooner,
Ann Mclellan, Bailey Prince, Larissa Bourne, Husna Adams, Hannah Bautista, Lennox Clay, Lexi Lin, Ruby-Rose Glover, Xena Washington, Xiao Zinkernagel,
Selin Travers, Kacper Iles, Shannen Mustafa, Jena Kramer, Ami Avila, Zuma Xargos, Asmaa Browning, Marian Guzman, Niamh Oakley, Brody Ahmad, Raees Snyder,
Daanyaal Jackson, Owais Rodriquez, Bushra Hanna, Carla Burt, Chanelle Hackett, Dwayne Andersen, Vickie Webb, Keeleigh Trevino, Mercedes Firth, Preston Avalos,
Dustin Marin, Nella Morris, Ammaar Davila]
`
    

return (
    <>
        {
        !correctAnswer && 
        <div>
            <div>
            <p className={style.youDidntDoIt}>NB: This challenge is very hard. Consider completing the other challenges before this one.</p>
            <h1>Feedback chains</h1>
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