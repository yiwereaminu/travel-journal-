import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/Card";
import MainNav from "./component/MainNav";

function App() {
  return (
    <>
      <div>
        <MainNav />
        <Card />
      </div>
    </>
  );
}

export default App;
