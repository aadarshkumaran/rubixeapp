import About from './components/about';
import Banner from './components/banner';
import Footer from './components/footer';
import Form from './components/form';
import Started from './components/getting-started';
import Navbar from './components/navbar';
import TechForTeens from './components/techforteens';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Started/>
      <TechForTeens/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
