import { useState, useEffect } from 'react';
import axios from 'axios';


//fetch blocked cause no premission 


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://quotes.rest/qod.json/api_key=JqbLNjISMtIT7vazivHsTLVAH1PJTVppDk1PzYM7")
    .then(results => console.log(results))
// fetch('http://quotes.rest/qod.json?category=inspire')
// .then(res=> res.json())
// .then(data=>{
// console.log(data);
// })
  }, []);

  return (
    <div>
      {data && <div>{JSON.stringify(data)}</div>}
      {console.log(data)}
    </div>
  );
}

export default App;