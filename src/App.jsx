import About from './components/organisms/About/About'
import Gallery from './components/organisms/Gallery/Gallery'
import data from "./structure.json"

const App = () => {
  return (
    <div className="wrapper">
        <About data = {data}/>
        <Gallery data ={data}/>
    </div>
  );
}
export default App;
