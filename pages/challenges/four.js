import axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default function Four() {

    function sendAnswer() {
        const answer = document.querySelector('#answer').value
        axios.post('/api/challenge4', {
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
    

    The easter numbers are a sequence of positive integers.

    Every number in the sequence is equal to or greater than the previous number.
    The value of the number at the n-th position denotes how many times n occurs in the sequence.

    The sequence starts with the value 1 at position 1 (n=1).
    The first 5 numbers of the sequence are therefore: 1, 2, 2, 3, 3, 4 ...

    Find the sum of the 1000000 (1 million) first numbers in the sequence.
`
    

    return (
        <>
            <div>
                <h1>Easter numbers</h1>
                <ReactMarkdown children={md}/>
            </div>
            <div>
                <input type="text" id="answer" name="answer" label="text"/>
                <button onClick={sendAnswer}>Send answer </button>
            </div>
        </>
    )
}