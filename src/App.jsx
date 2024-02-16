import AddGoal from './components/AddGoal/AddGoal.jsx';
import Item from './components/Item/Item.jsx';
import Quote from './components/QuotesApi/Quotes.jsx';
import ImageApi from './components/ImageApi/ImageApi.jsx';
import WeatherApi from './components/WeatherApi/WeatherApi.jsx';

import { useState, useEffect } from "react";

const App = function () {
  const [inputData, setInputData] = useState(null);
  const [count, setCount] = useState(0);

  const inputDataTo = (inputData) => {
    //getting the input data to make new item
    setInputData(inputData);
    //setting the count for unique id of items --> keys
    setCount(count + 1);
  };
  

  return (
    <div>
      <section>
        <h1>HI im the quote without css and code</h1>
      </section>

      <section>
        <h1>HI im the weather without css and code</h1>
        <WeatherApi/>
      </section>

      <section>
        <h1>HI im the background without css and code</h1>
        <ImageApi/>
      </section>

      <section>
        <div>
        <AddGoal inputDataToItem={inputDataTo} />
        </div>
        <div>
        <Item addNewItem={{inputData,count}}/>
        </div>
      </section>
    </div>
  );
};

export default App;
