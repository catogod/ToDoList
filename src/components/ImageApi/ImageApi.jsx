import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //explain later, wish the quote api will also work like i
    fetch('https://api.unsplash.com/photos/random?count=3&client_id=0NMREIpOoa-rlhjNg-XTQpVYULJQUlNJNFZxyH37p_A')
      .then(response => response.json())
      .then(json => setData(json))//may use another option
      .catch(error => console.error(error));
      const picLink =[];
      for (let i in data){
        picLink.push(data['urls']['raw']);
      }
      setData(picLink);
      console.log(picLink);
  }, []);

  return (
    <div>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
    </div>
  );
}

export default App;