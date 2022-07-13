import "./styles.css";
import { Component } from "react";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="VueData">
        <ComponentC />
        </UserProvider>
      </div>
    );
  }
}
export default App;
