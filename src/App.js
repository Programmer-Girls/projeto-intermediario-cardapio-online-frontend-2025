import "./App.css";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Acompanhamentos from "./Components/Acompanhamentos";
import Chas from "./Components/Chas";
import Cafes from "./Components/Cafes";
function App() {
  return (
    <div className="App">
      <Header />
      <Cafes />
      <Chas />
      <Acompanhamentos />
    </div>
  );
}

export default App;
