//You need to import useState from react to use state in a functional component.
//Unlike regular variables, state variables will cause the component to re-render when they are updated.
import { useState } from "react";

const Clicker = () => {
    // This is a state variable. It is used to store the number of times the button has been clicked.
    // You need to specify the variable name, and then specify a function to update the variable.
    const [clickCount, setCount] = useState(0);

    return (
        <>
            <h2>You have clicked the button x times.</h2>
            <button>Click Me</button>
        </>
    );
};

export default Clicker;