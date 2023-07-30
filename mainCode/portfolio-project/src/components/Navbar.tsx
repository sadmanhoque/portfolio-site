import { Link } from "react-router-dom";
import "../scss/custom.scss";

function Navbar() {
  return (
    <div style={{ backgroundColor: "var(--background-color)" }}>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
