export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.answer) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'No answer found' })
    }

    let ret = "False";

    let answer = 'flag{happy_easter_to_each_and_every_one_of_you}';
    if (body.answer === answer) {
        ret = "Correct!";
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${ret}` })
  }
  