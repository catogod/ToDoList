import AddGoal from './components/AddGoal/AddGoal.jsx';
import Item from './components/Item/Item.jsx';
import Quote from './components/QuotesApi/Quotes.jsx';
import {CircularLinkedList} from './components/ImageApi/ImageApi.js';
import WeatherApi from './components/WeatherApi/WeatherApi.jsx';
import './App.css';

import { useState, useEffect } from "react";

const App = function () {
  const [inputData, setInputData] = useState(null);//the goal himself
  const [count, setCount] = useState(0);//count for goal, key basically 
  const [photos, setPhotos] = useState(null);//circular node of the photos url

  function inputDataTo(inputDataVar){
    //getting the input data to make new item
    setInputData(inputDataVar);
    //setting the count for unique id of items --> keys
    setCount(count + 1);
  }


  //async function of image change once per render
  useEffect(() => { 
    async function callRequestGetImagesUrl() {
      //setting the values to null
      let newUrl=new CircularLinkedList();
      let response =await fetch('https://api.unsplash.com/photos/random?client_id=jNzeAiue4NwHizYw1FvsU4YQXVY-9J0kUlxejH8JUUQ&count=5&auto=format');
      let data = await response.json();
      for (let i in data){
          newUrl.append(data[i]['urls']['regular']);//appending to newUrl the url one by one to circular node
        }
      setPhotos(newUrl.head);
    }
    callRequestGetImagesUrl();//calling the function above
  }, []);

  //go through images by getting the next
  function MapThroughPhotos(){
    let node = null;
    if(photos!=null){
      node=photos.next;//setting the next node to node
      setPhotos(node);
    }
  }

  return (
    <body style={{backgroundImage: `url(${photos && photos.data})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
    <div>
      <section>
        <Quote/>
      </section>

      <section>
      <div className="top-right"> <WeatherApi/></div>
      </section>
      <div className='div-fit-content'>
      <h1>Change the images by click <button onClick={MapThroughPhotos}>next</button> </h1>
      </div>
      <div>
      <AddGoal inputDataToItem={inputDataTo} />
      </div>
      

        <div className="container-wrapper">
        <Item addNewItem={{inputData,count}}/>
        </div>

    </div>
    </body>
  );
};

export default App;
