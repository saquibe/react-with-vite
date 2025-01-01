import Navbar from "./03-project-structure/Navbar";
import { About, Home } from "./03-project-structure/Pages";
import "./App.css";
// import CleanUpFunction from "./02-useEffect/09-cleanup-function";
// import UserChllenge from "./02-useEffect/08-user-challenge";
// import ToggleChallenge from "./02-useEffect/07-toggle-challenge";
// import ShortCircuitOverview from "./02-useEffect/06-short-circuit";
// import MultipleReturnFetchData from "./02-useEffect/05-multiple-return-fetch-data";
// import MultipleReturnsBasics from "./02-useEffect/04-conditional-rendering";
// import FetchData from "./02-useEffect/03-fetch-data";
// import MultipleEffect from "./02-useEffect/02-multipleEffect";
// import UseEffectBasics from "./02-useEffect/01-useEffect-basics";
// import UseStateGotcha from "./01-useState/05-useState-gotcha";
// import ErrorExample from "./01-useState/01-error-example";
// import UseStateBasics from "./01-useState/02-useState-basics";
// import UseStateArray from "./01-useState/03-useState-array";
// import UseStateObject from "./01-useState/04-useState-object";

function App() {
  return (
    <div className="container">
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha /> */}
      {/* <UseEffectBasics /> */}
      {/* <MultipleEffect /> */}
      {/* <FetchData /> */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnFetchData /> */}
      {/* <ShortCircuitOverview /> */}
      {/* <ToggleChallenge /> */}
      {/* <UserChllenge />   */}
      {/* <CleanUpFunction />*/}

      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
