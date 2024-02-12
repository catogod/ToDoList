import "./Item.css";
import { useState, useEffect, useRef } from "react";

export default function Item({ addNewItem }) {
  //so need map + save the items
  //next need that the button complete while pressed while change her color to grey and text to undo
  //delete will remove the button from array of objects
  //btw useEffect will be good to the api cause fetch and async will help
  //it render me only the prev element

  const [items, setItems] = useState([]);
  const currentTextRef = useRef();

  //update the value of the items in useState each time getting DataInput
  useEffect(
    function () {
      addNewItem.count !== 0 && setItems((items) => [...items, addNewItem]);
    },
    [addNewItem]
  );

  function callDeleteButton(index) {
    //can use .filter however thats also works for me
    //add filter
    const newItem = [];
    for (let cItem of items) {
      if (cItem.count != index) {
        newItem.push(cItem);
      }
    }
    //updating the items which also calls useEffect update the web visual
    setItems(newItem);
    /* const newItem1 = items.filter((index) => {
        return items.count != index;   });*/
  }
  //put it for now can handle with this css problem, should look more into react hooks the ref onr
  const handleClick = event => {
    // 👇️ toggle styles on click
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = 'salmon';
      event.currentTarget.style.color = 'white';
    }
  };


  //mapping through the items and make then and ugly html for now
  //adding the onclick on delete to delete, really simple
  return (
    <div>
      {items.map((item) => (
        <>
          <ul key={item.count}>
            <p>{item.inputData}</p>
            <li>
              <button onClick={handleClick} name="Complete">
                Complete
              </button>
              <button
                name="Delete"
                onClick={() => callDeleteButton(item.count)}
              >
                Delete
              </button>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}
