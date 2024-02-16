import { useState, useEffect } from 'react';




function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
      fetch('https://quotes.rest/qod.json?category=inspire&api_key=JqbLNjISMtIT7vazivHsTLVAH1PJTVppDk1PzYM7')
        .then((res) => {
          //check later for response type
          console.log(res.json());     
          return res.json();
        })
        .then((data) => {
          console.log(data);     
          setQuote()
        })
        .catch(error => console.log(error));
    }, []); 

  return (
    <div>
      {quote}
    </div>
  );
}

export default App;