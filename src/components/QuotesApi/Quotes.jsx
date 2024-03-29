import { useState, useEffect } from 'react';
import "./Quotes.css";



export default function Quote() {
  const [quote, setQuote] = useState([]);//the quote

  //render on page refresh and get quote
  useEffect(() => {
  fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      method: "GET",
          headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'WUx0anzobTx0h0azpgz/wA==512IqvoONnF6Ud0j' 
          },
  })
  //check if response is bad
  .then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
//adding data to useState quote
  .then(data => {
  let quote = data[0]["quote"] +" By " +data[0]["author"];
  setQuote(quote);
  })
  //if error accrued 
  .catch(error => {
  console.error('There was a problem with your fetch operation:', error);
  });
    }, []); 
    //return the quote
  return (
    <><div className='container'>
      <p className='paragraph_p'>Inspirational Quote:</p>
      <p className='paragraph_p'>{quote}</p>
    </div>
    </>
  );
}
