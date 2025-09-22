import { useState, useEffect } from "react";
//You need to import useEffect from react to use side effects in a functional component.
//Side effects are operations that affect something outside the scope of the function being executed.
//Examples of side effects include: fetching data from an API, updating the DOM, setting up a subscription, and timers.

//This is a different way of creating a component. This is known as a functional component.
//This way you don't neeed to export at the end of the file.
export default function Countdown() {
    const [time, setTime] = useState(20); //Initial time is 20 seconds.
    
    //Has two parameters. The first parameter is a function that contains the side effect code.
    //The second parameter is an array of dependencies. The side effect will only run if one of the dependencies has changed.
    //If the array is empty, the side effect will only run once when the component is mounted.
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time-1);
            console.log(time);
        }, 1000);

        return () => clearInterval(timer); 
        //This is a cleanup function. It will run when the component is unmounted or before the side effect runs again.


    }, [time]);

    return (
        <>
            <p><strong>Elapsed Time:</strong> { time }</p>
        </>
    );
}   