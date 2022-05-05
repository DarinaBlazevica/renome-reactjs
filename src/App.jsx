import Wrapper from "./components/organisms/Wrapper";
import data from "./structure.json";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Wrapper data = { data } />
    </div>
  );
};
export default App;
