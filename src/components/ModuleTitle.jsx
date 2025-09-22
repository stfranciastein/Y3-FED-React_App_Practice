const ModuleTitle = (props) => {

    console.log(props);
    return (
        // This is known as a React Fragment. You can either return a react fragment or a div.
        // Trying to return two elements without a parent div or fragment will return an error.
            <> 
                <h2>{ props.title } Module.</h2>
                <p>We have { props.students} students in this course.</p>
            </>);
        // Props are read-only. You cannot change them.
        // You can pass any data type as props. String, Number, Boolean, Array, Object, Function.
        // Props are used to pass data from parent to child component.
        // Props are immutable. You cannot change them.
        // Props are used to make components reusable.
        // Props are used to make components dynamic.
};

export default ModuleTitle;