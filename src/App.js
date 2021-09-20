// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <Navbar title="Texy" aboutText="About"/>
   <div className="container my-3"><TextForm heading="Enter Your Text to Analyze Below" /></div>
   {/* <About/> */}
   </>
  );
}

export default App;
