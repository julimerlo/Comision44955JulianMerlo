import "./App.css";
import Navbar from "./components/NavBar";
import Cartwidget from "./components/CartWidget";
import Itemlistcontainer from "./components/ItemListContainer";

const name = "Julian";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Cartwidget />
      </Navbar>
      <Itemlistcontainer name={name} />
    </div>
  );
}

export default App;
