import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Carde from "./components/cards/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./helper/data"
function App() {
  return (
    <div>
      <Navbar />
   
        
        <h1>POPULAR TOUR PLACES</h1>
        <Carde data={data}/>
     
    </div>
  );
}

export default App;
