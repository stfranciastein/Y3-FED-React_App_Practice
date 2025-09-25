import { useState } from "react";

export default function LoginForm() {
    
    //You need to import useState from react to use state in a functional component.
    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");
    
    const handleChange = (e) => {
        setUsername(e.target.value); //this gets the value from the input field and sets it to the username state.
        
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //This prevents the default behaviour of the form which is to refresh the page.
        console.log(`FIREWALL HACKED BY: ${username}`);
    };

    //The purpose of this component is to create a login form.
    return (
        <>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={ username } onChange={handleChange}></input>    
                </label>

                {/* <label>
                    Password:
                    <input type="password" name="password" value={ password } onChange={handleChange}></input>
                </label> */}
                
                <input type="submit" value="Submit"></input>
            </form>
        </>
        );

}