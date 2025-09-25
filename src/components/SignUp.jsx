import { useState } from "react";

export default function SignUp() {
    
    //This is known as a controlled form. The form data is handled by the React component.
    const [signedUp, setSignedUp] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: "",
        newsletter: true
        });
    
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value; // This is a ternary operator. It is a shorthand for an if-else statement. 
        //If the input type is a checkbox, then the value will use the checked property, otherwise it wil use the value property.
        const name = e.target.name;

        console.log("Name is: " + name);

        setForm({
            ...form, //This is known as the spread operator. It copies all the properties of the form object's current state (i.e. username, password, newsletter) into the new object.
            //Find the doco here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            [name]: value //This is known as computed property names. It allows you to use a variable as a property name.
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //This prevents the default behaviour of the form which is to refresh the page.
        console.log(`FIREWALL HACKED BY: ${form.username}`);
        setSignedUp(true);
    };

    //The purpose of this component is to create a login form.
    return (
        <>
            <h2>Login Form</h2>
            
            {/* //Conditional rendering using a ternary operator 
            // The first*/}

            {(signedUp) ? (
            <>
                <h3>Thank you for signing up, {form.username}!</h3>
                <button onClick={() => setSignedUp(false)}>Log out</button>
            </>
            ) : (
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={ form.username } onChange={handleChange}></input>    
                </label>

                <br></br>

                <label>
                    Password:
                    <input type="text" name="password" value={ form.password } onChange={handleChange}></input>    
                </label>

                <br></br>
                
                <label>
                    I agree to receive marketing emails.
                    <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} ></input> 
                </label>
                
                <br></br>

                <input type="submit" value="Submit"></input>
            </form>
            )}
        </>
        );

        // You can also do something like 
        // if(signedUp) {
        //    return <h3>Thank you for signing up, {form.username}!</h3>
        // }
        // Then below that, you can render the form without the ternary operator.
        // You would have to store the form in a variable though, which is what you'll be returning if the user hasn't signed up yet.
        // This will only work if whatever the returned item is for when you're logged in.
        // You can also add a button that shows a logout option that sets signedUp to false again.

}