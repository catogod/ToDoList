import { useState, useEffect } from 'react';

function App() {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
      fetch('https://api.unsplash.com/photos/random?count=3&client_id=0NMREIpOoa-rlhjNg-XTQpVYULJQUlNJNFZxyH37p_A')
        .then((res) => {
          //check later for response type
          return res.json();
        })
        .then((data) => {
          const newUrl=[];
          //console.log(data);
          for (let i in data){
            console.log(data[i]['urls']['full']);
            newUrl.push(data[i]['urls']['full']);
          }
          console.log(newUrl);
          setPhotos(newUrl);
          //console.log(photos);
        })
        .catch(error => console.log(error));
    }, []);

    function getImage(){
      return photos[1];
    }

//+{photos[1]} +} need to add url
  return (
    <div style={{ backgroundImage:`url(${photos})` }}>
      {console.log(photos)}
      {photos && photos.map((photo) => (
        <img src={photo} alt='nah' width={100} />
      ))}
    </div>
  );
}

export default App;