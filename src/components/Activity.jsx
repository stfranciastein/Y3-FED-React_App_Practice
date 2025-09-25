import { useState } from "react";

export default function Activity() {
    
    //This is known as a controlled form. The form data is handled by the React component.
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
    };

    //The purpose of this component is to create a login form.
    return (
        <>
            <h2>Bob I'm gonna call him bob. I don't know why, he's just bob.</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={ form.username } onChange={handleChange}></input>    
                </label>

                <br></br>

                <label>
                    Email
                    <input type="text" name="email" value={ form.email } onChange={handleChange}></input>    
                </label>

                <br></br>

                <label>
                    Number of months for contract:
                    <input type="number" name="months" value={ form.months } onChange={handleChange}></input>
                </label>

                <br></br>
                
                <label>
                    I agree to have insurance
                    <input type="checkbox" name="insurance" checked={form.insurance} onChange={handleChange} ></input> 
                </label>
                
                <br></br>

                {/* <input type="submit" value="Submit"></input> */}
            </form>
            <p>Hello, {form.username}! Your email is {form.email} You have selected a {form.months} month contract {form.insurance ? "with" : "without "} insurance</p>
        </>
        );

}