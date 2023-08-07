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
  const workItems = ["DevOps", "BackEnd", "IoT"];
  const navBarItems = ["Work", "Projects", "Contacts"];
  const categoryItems = [
    { section: "Work", contents: ["DevOps", "BackEnd", "IoT"] },
    { section: "Projects", contents: ["one", "two", "three"] },
    { section: "Contacts", contents: ["aa", "bb", "cc"] },
  ];

  return (
    <>
      <Navbar navBarItems={navBarItems} />
      <div style={header}>
        <h1>Hello, React App!</h1>
      </div>

      <main>
        {categoryItems.map((category) => (
          <div className="content">
            <Cards categories={category.contents} />
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
