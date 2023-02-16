import { Link } from "react-router-dom";
import AppButton from "../../components/ui/AppButton";

const Nav = function () {
  window.localStorage.removeItem("lastSearch");

  return (
    <nav className="nav">
      <Link to="/" className="nav__element">
        <AppButton buttonText="Strona główna" />
      </Link>
      <Link to="/favourites" className="nav__element">
        <AppButton buttonText="Ulubione" />
      </Link>
    </nav>
  );
};

export default Nav;
