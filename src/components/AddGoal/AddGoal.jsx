import './AddGoal.css';
import {useRef} from 'react';


export default function AddGoal({inputDataToItem}){
    //hook that manages the user input
    const inputRef = useRef(null);

    function handleClick() {
        //passing the data up to parent component
        inputDataToItem(inputRef.current.value);
        //clearing the value after clicking
        inputRef.current.value = '';
    }

    //handleClick calls 2 function, one for move the data up to the parent and one for styling
    return(
        <>
            <input id="InputGoal" ref={inputRef} type="text"  placeholder="Enter Your Goal" autoComplete="off"/>
            <button onClick={handleClick} className="ImButton" >Add goal</button>
            <h2>{}</h2>
        </>
    );
}



