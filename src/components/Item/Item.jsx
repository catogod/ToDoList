import './Item.css';
import  { useState, useEffect } from 'react';

export default function Item({addNewItem}){
    //so need map + save the items
    //next need that the button complete while pressed while change her color to grey and text to undo
    //delete will remove the button from array of objects
    //btw useEffect will be good to the api cause fetch and async will help
    //it render me only the prev element


    const [items,setItems] = useState([]);

    //update the value of the items in useState each time getting DataInput 
    useEffect(() => 
    {  addNewItem.count!==0 && setItems(items => [...items, addNewItem]); } ,  [addNewItem]);

    //mapping through the items and make then and ugly html for now 
    return(
        <div>
            {items.map((item, i) => (
            <>
            <li  key={i}>
            {item.inputData}
            </li>
            <li>
            <button name='Complete'>Complete</button>
            <button name='Delete'>Delete</button>
            </li>
            </>
            ))}
        </div> 
    );
}