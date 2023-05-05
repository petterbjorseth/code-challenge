import axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default function Three() {

    function sendAnswer() {
        const answer = document.querySelector('#answer').value
        axios.post('/api/challenge3', {
            answer: answer
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
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
https://gist.github.com/Ozzyz/bf3f91723b0f906d9a2f675830867fa4
Yousef Nairn,49
`
    

    return (
        <>
            <div>
                <h1>Feedback chains</h1>
                <ReactMarkdown children={md}/>
            </div>
            <div>
                <input type="text" id="answer" name="answer" label="text"/>
                <button onClick={sendAnswer}>Send answer </button>
            </div>
        </>
    )
}