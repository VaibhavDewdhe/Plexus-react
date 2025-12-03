import {useState} from 'react';

const Counter = function(){
    const arr = useState(0);

    function increment(){
        arr[1](arr[0] + 1);
        console.log('Count is ', arr[0]);
    }

    return <button onClick={increment}>Count is {arr[0]}</button>
}

export default Counter;