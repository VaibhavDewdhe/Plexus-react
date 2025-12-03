import {useState} from 'react';

const Counter = function(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
        console.log('Count is ', count);
    }

    return <button onClick={increment}>Count is {count}</button>
}

export default Counter;