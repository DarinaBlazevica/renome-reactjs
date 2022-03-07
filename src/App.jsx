import About from './components/organisms/About/About'
import Gallery from './components/organisms/Gallery/Gallery'
import data from "./structure.json"

const App = () => {
  return (
    <div className="About">
        <About data = {data}/>
        <div className="Gallery">
          <Gallery data ={data}/>
        </div>
      </div>
  );
}
export default App;
