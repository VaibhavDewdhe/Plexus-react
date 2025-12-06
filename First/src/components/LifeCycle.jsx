import { useEffect, useState } from "react"

const LifeCycle = () => {
    const [count, setCount] = useState(1);
    const [secondCount, setSecondCount] = useState(10);


    // useEffect(() => {
    //     console.log('always working')
    // });


    useEffect(() => {
        console.log('once when mounted')
    }, []);


    useEffect(() => {
        console.log('value of count is changes : ', count)
    }, [count]);

    useEffect(() => {
        console.log('value of secondCount is changes : ', secondCount)
    }, [secondCount]);


    useEffect(() => {
        console.log('konitari update zalay, kon aahe mahit nahi')
    }, [count, secondCount]);


    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>inc count : {count}</button>
            <button onClick={() => setSecondCount(count => count + 10)}>secondCount count : {secondCount}</button>
        </div>
    )
}

export default LifeCycle