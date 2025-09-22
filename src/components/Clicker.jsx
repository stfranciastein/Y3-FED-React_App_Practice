//You need to import useState from react to use state in a functional component.
//Unlike regular variables, state variables will cause the component to re-render when they are updated.
import { useState } from "react";

//You can import more than one component in a file.
//You don't need to re-write import {X} from react for each component. You can simply separate them with a comma.
//i.e. import { useState, useEffect }.

//Note that you need to use them in the component and in order of what you import first.
//For example, if you import useState and useEffect, you need to use useState first in the component and then useEffect.

const Clicker = () => {
    // This is a state variable. It is used to store the number of times the button has been clicked.
    // You need to specify the variable name, and then specify a function to update the variable.
    const [clickCount, setCount] = useState(0);
    const handleClick = () => {
        setCount(clickCount + 1);
    }; 

    return (
        <>
            <h2>You have clicked the button { clickCount } times.</h2>
            <button onClick={handleClick}>Click Me</button>
        </>
    );
};

export default Clicker;