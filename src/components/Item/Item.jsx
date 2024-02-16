import "./Item.css";
import { useState, useEffect } from "react";

export default function Item({ addNewItem }) {
  //so need map + save the items
  //next need that the button complete while pressed while change her color to grey and text to undo
  //delete will remove the button from array of objects
  //btw useEffect will be good to the api cause fetch and async will help
  //it render me only the prev element



  //idk why but when i complete elements and then deletes some element it undo all my elements
  const [items, setItems] = useState([]);
  const [textButtonComplete,setTextButtonComplete] = useState('Complete');

  //update the value of the items in useState each time getting DataInput + putting the value of textDecor to none
  useEffect(
    function () {
      addNewItem.count !== 0 && setItems((items) => [...items, Object.assign(addNewItem, {textDecor: "none"})]);
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
  }
  function callCompleteButton(index){
    //can use .filter however thats also works for me
    //add filter
    //add  ternary event to this
    const newItem = [];
    for (let cItem of items) {
      if (cItem.count === index) {
        //complete / undo 
        cItem.textDecor = cItem.textDecor == 'none' ? 'line-through' : 'none';
        setTextButtonComplete(textButtonComplete == 'Complete' ? 'Undo' : 'Complete');
        newItem.push(cItem);
      }
      else{
        newItem.push(cItem);
      }
    }
    //updating the items which also calls useEffect update the web visual
    setItems(newItem);
  }

  //textDecorationLine

  //mapping through the items and make then and ugly html for now
  //adding the onclick on delete to delete, really simple
  return (
    <div>
      {items.map((item) => (
        <>
          <ul>
            <p key={item.count} style={{ textDecoration: item.textDecor }} >{item.inputData}</p>
            <li>
              <button 
              name={textButtonComplete}
              onClick={() => callCompleteButton(item.count)}>
                Complete
              </button>
              <button
                name='Delete'
                onClick={() => callDeleteButton(item.count)}>
                Delete
              </button>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}
