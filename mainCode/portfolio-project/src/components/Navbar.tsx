import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
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
