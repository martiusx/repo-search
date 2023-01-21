import AppButton from "../../components/ui/AppButton";
import { Link } from "react-router-dom";

const Nav = function () {
  return (
    <nav>
      <Link to="/">
        <AppButton buttonText="Strona główna" />
      </Link>
      <Link to="/favourites">
        <AppButton buttonText="Ulubione" />
      </Link>
    </nav>
  );
};

export default Nav;
