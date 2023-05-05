import axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default function Two() {

    function sendAnswer() {
        const answer = document.querySelector('#answer').value
        axios.post('/api/challenge2', {
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
    
    Oh no! I was supposed to give out easter eggs to all the Netlight offices, but the easter bunny has them, and this time they have ran away on a robot turtle! 
    I think they are somewhere around the Berlin office, but I don't know where. Luckily, I have intercepted the steering communication between that scheming little *leporidae* and the robot, and can therefore know exactly where they are! 

    The communication I have intercepted are characters strings which denote actions. 
    
    (F)orward/(B)ackwards - move one unit forward/backwards
    (R)ight/(L)eft - Turn 90 degrees clockwise/counter-clockwise
    
    Movement is applied in the direction the character is facing, and I know that the tricksters are facing in the y-direction at the start of the sequence, in the position (X,Y)=(0,0). 
    Got it? 
    Let me give you an example just to be sure.
    If I received the sequence FRFLB, I would calculate their end position like this:
    
    Start (0,0)
    Forward -> (0,1)
    Right (turn to x-direction)
    Forward -> (1,1)
    Left (turn back to face y-direction)
    Backwards -> (1,0)
    
    The turtlebunny would end up in the coordinate (1,0). Therefore, the answer to the sequence FRFLB is (1,0). 
    Now, this is easy when the sequence is so short! But the turtlebunny has travelled faaar, and I need your help to give me their exact position!
    Can you please help me? The sequence is
    LFRFLFRFLFRFLFRFLFRFLFRFLFRFFLFRFFFFRFLFRFLFRFLFRFLFRFFFRFLFRFLFLRFLFRFLFRFFFRFLFRFLFRFLFRFLFRFFFFRFLFFRFLFRFLFRFLFRFLFRFLFRFLFRFFFRRLRBRBLBRBLBRBLBRBLBRBLRBBBBBBBLFRFFLFRFFLFRFFLFRBBBBBBLFRFFFFFFFRFFFRFFLFRBBRBRBBBBBBBLFRFFLFRFFLFRFFLFRBBBBBBLFFRFFFFFFFLFFFFFLFRBBBBLFFFFFFLF`
    

    return (
        <>
            <div>
                <h1>Turtlebunny</h1>
                <ReactMarkdown children={md}/>
            </div>
            <div>
                <input type="text" id="answer" name="answer" label="text"/>
                <button onClick={sendAnswer}>Send answer </button>
            </div>
        </>
    )
}