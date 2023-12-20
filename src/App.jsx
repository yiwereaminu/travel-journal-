import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/Card";
import MainNav from "./component/MainNav";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <div>
        <MainNav />
        {cards}
      </div>
    </>
  );
}

export default App;
