import "./Item.css";
import { useState, useEffect } from "react";

export default function Item({ addNewItem }) {



  const [items, setItems] = useState([]);//current items
  const [lastItemKey,setLastItemKey]=useState(null);//the last item added - to prevent the bug with the render i had

  //update the value of the items in useState each time getting DataInput + putting the value of textDecor to none and state to complete
  useEffect(
    function () {
    const myFav =  CheckIfDuplicateRenderItem()==true ? setItems((items) => [...items, Object.assign(addNewItem, {textDecor: "none"},{state:"Complete"})]):null;
},
    [addNewItem]
  );


  function CheckIfDuplicateRenderItem(){
    //check if pressed
    if (addNewItem.count!=0){
      //first add item
      if (items.length==0 && lastItemKey==null){
        setLastItemKey(addNewItem.count);
        return true;
      }
      //in function adding
      if(lastItemKey!=addNewItem.count){
        setLastItemKey(addNewItem.count);
        return true;
      }
    }
  return false;
  }


  function callDeleteButton(index) {
    //can use .filter however thats also works for me
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
    const newItem = [];
    for (let cItem of items) {
      if (cItem.count === index) {
        //complete / undo 
        cItem.textDecor = cItem.textDecor == 'none' ? 'line-through' : 'none';
        cItem.state = cItem.state == 'Complete' ? 'Undo' : 'Complete';
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
    <>
        {items.map((item) => (
        <div className="container">
        <p key={item.count} style={{ textDecoration: item.textDecor }} >{item.inputData}</p>
            <div className="buttons">
            <button onClick={() => callCompleteButton(item.count)}>{item.state}</button>
            <button name='Delete' onClick={() => callDeleteButton(item.count)}> Delete</button>
            </div>
        </div> ))}
    </>
  );
}
