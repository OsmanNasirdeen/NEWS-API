import Navbar from "./components/navbar/navbar";
import Article from "./components/articles/article";
function App() {
  const cardText = `Some quick example text to build on the card title and make up the
            bulk of the card's content ${20}`;
  return (
    <div className="App">
      <Navbar background="#7C7A7A" />
      <Article cardText={cardText} />
    </div>
  );
}

export default App;
