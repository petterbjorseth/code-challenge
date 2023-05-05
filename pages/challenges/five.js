import axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default function Five() {

    function sendAnswer() {
        const answer = document.querySelector('#answer').value
        axios.post('/api/challenge5', {
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


    I have intercepted what I believe to be the easter bunny's top secret message that will change this world forever.
    I also know that these messages are generated through a super secret device that alters the message several times using not-so-state-of-the-art technology.

    Upon further inspection, this device takes in a message and outputs ones and zeroes. I know that it also uses some sort of key,
    but I don't know how this key is used. Luckily, I found the key on a sticky note in the rabbit's office, and it says chubbybunny.
    Can you decode this message? I can't seem to understand it, but I know that you know your one's and zero's much better than me.

    The code is: 
    
    01100110 01011000 01011010 01110000 01011010 01101100 00111001 01101111 01100010 01010110
    00111001 01111001 01011001 01010111 01101100 01100110 01100101 01101110 01000010 01101101
    01100100 00110011 01101100 01100110 01100001 00110011 01000010 00110101 01011000 00110011
    01010110 01110111 01100100 01010111 01011010 01100110 01100010 01011000 01010110 01100110
    01100011 00110011 01101100 01101000 01100100 01011000 01101100 01111001 01011000 00110010
    01111000 01110001 01100011 01011000 01101100 01110000 01100101 00110010 01101000 00110001
    01100011 00110010 01100111 00111101

    Oh, and one last thing. I believe the answer is on the format flag{some_text_here}.

    _(Hints will be gradually given during the day)_
    `
    

    return (
        <>
            <div>
                <h1>Matryoshka Encoded Eggs</h1>
                <ReactMarkdown children={md}/>
            </div>
            <div>
                <input type="text" id="answer" name="answer" label="text"/>
                <button onClick={sendAnswer}>Send answer </button>
            </div>
        </>
    )
}