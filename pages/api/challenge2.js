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

    let ret = false;
    
    console.log(body.answer)
    if (body.answer === '(1,12)' || body.answer === '(1, 12)' || body.answer === '1,12' || body.answer === '1, 12') {
        console.log("hei");
        ret = true;
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${ret}` })
  }
  