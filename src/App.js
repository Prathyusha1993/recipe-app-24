import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
