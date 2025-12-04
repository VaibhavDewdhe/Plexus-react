import { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count + 1)}>Count is {count}</button>
}

export default Counter;