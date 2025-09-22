
import ModuleTitle from "./components/ModuleTitle";
import SelfModule from "./components/SelfModule";
import Clicker from "./components/Clicker";

const App = () => {

    return (
        <>
            <h1>Hello from App</h1>
            {/* <ModuleTitle title="Front End Dev" students={20}/>
            <ModuleTitle title="AI" students={40}/>
            <ModuleTitle title="Advanced JavaScript" students={100}/>

            <SelfModule name="Johnny"/>
            <SelfModule name="Gillian"/>
            <SelfModule name="Jordan"/> */}

            <Clicker></Clicker>
        </>
    );
};

export default App;
