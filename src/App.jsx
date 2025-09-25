
import ModuleTitle from "./components/ModuleTitle";
import SelfModule from "./components/SelfModule";
import Clicker from "./components/Clicker";
import Countdown from "./components/Countdown";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Activity from "./components/Activity";
import ListMe from "./components/ListMe";

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

            {/* <Clicker></Clicker> */}
            {/* <Countdown></Countdown> */}
            {/* <LoginForm></LoginForm> */}
            {/* <SignUp></SignUp> */}
            {/* <Activity></Activity> */}
            <ListMe></ListMe>
        </>
    );
};

export default App;
