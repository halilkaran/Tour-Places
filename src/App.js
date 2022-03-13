import Header from "./components/header/Header";
import "./App.css"
import Carde from "./components/cards/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./helper/data"
function App() {
  return (
    <div>
      <Header />
      <main>
        
        <h1>POPULAR TOUR PLACES</h1>
        <Carde data={data}/>
      </main>
    </div>
  );
}

export default App;
