import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  };
  const categories = ["DevOps", "BackEnd", "IoT"];
  const navBarItems = ["Home", "Work", "Projects", "Contacts"];

  return (
    <>
      <Navbar navBarItems={navBarItems} />
      <div style={header}>
        <h1>Hello, React App!</h1>
      </div>

      <main>
        {navBarItems.map((item) => (
          <div className="content">
            <h1 className="content-header" id={item}>
              {item}
            </h1>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
