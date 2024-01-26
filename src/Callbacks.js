import React,{ useState, useCallback } from "react";

const Callbacks = () => {
    const [count,setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log(`Button clicked.Count: $(count)`);
    }, [count]);
    return (
        <div>
            {/*Button that triggers the memoized function */}
            <button onClick = {handleClick}>click megit</button>

            {/*Displayed the current count*/}
            <p>Count: {count}</p>

            {/*Button to increment the count*/}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default Callbacks