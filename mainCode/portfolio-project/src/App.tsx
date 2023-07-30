import "./App.css";
import Cards from "./components/Cards";

function App() {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  };
  const categories = ["DevOps", "BackEnd", "IoT"];
  const text = "something";
  return (
    <>
      <div style={header}>
        <h1>Hello, React App!</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Cards categories={categories[0]} text={text} />
          </div>
          <div className="col">
            <Cards categories={categories[1]} text={text} />
          </div>
          <div className="col">
            <Cards categories={categories[2]} text={text} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
