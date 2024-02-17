import { useState, useEffect } from 'react';
import "./Quotes.css";



function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {

fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      method: "GET",
          headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'WUx0anzobTx0h0azpgz/wA==512IqvoONnF6Ud0j' 
          },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  let quote = data[0]["quote"] +" By " +data[0]["author"];
  setQuote(quote);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
    }, []); 

  return (
    <><div className='container'>
      <p className='paragraph_p'>{quote}</p>
    </div>
    </>
  );
}

export default App;