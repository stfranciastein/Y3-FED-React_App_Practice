const SelfModule = (props) => {

    console.log(props);
    return <h1>The name { props.name } contains { props.name.length } characters!</h1>

};

export default SelfModule;