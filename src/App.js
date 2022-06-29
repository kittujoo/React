import "./styles.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome.js";
import Hellojsx from "./components/Hello.js";
import Counter from "./components/Counter.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassClick from "./components/ClassClick.js";
import EventBind from "./components/EventBind.js";
import ParentComponent from "./components/ParentComponent.js";
import UserGreeting from "./components/UserGreeting.js";
import NameList from "./components/NameList.js";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
// import "./appStyle.css";
// import style from "./appStyles.module.css";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App">hi</h1>
        <Inline/>
        <Stylesheet primary={true} />
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Greet name="KK" heroName="kk" />
        <Welcome companyName="VueData" branch="Banglore" />
        <Hellojsx />
        <Counter /> */}
      </div>
    );
  }
}
export default App;

// export default function App() {
//   return (
//     <div className="App">
//       {/* <MyComponet></MyComponet> */}
//       <Greet />
//       <Welcome />
//     </div>
//   );
// }