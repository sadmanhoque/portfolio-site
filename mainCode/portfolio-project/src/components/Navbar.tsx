//import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../App.css";

interface Props {
  navBarItems: string[];
}

function Navbar({ navBarItems }: Props) {
  return (
    <div>
      <nav>
        <ul>
          {navBarItems.map((item) => (
            <li className="fancy-link">
              <Link to={item} smooth={true} offset={-500} duration={500}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
