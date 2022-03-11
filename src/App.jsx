import About from './components/organisms/About/About'
import Gallery from './components/organisms/Gallery/Gallery'
import Footer from './components/organisms/Footer/Footer'
import data from "./structure.json"
import "./App.scss"

const App = () => {
  
  return (
    <div className="wrapper">
        <About data = { data }/>
        <Gallery data ={ data }/>
        <Footer data ={ data }/>
    </div>
  );
}
export default App;
