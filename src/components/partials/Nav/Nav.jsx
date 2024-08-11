import "./nav.css";

import NavAvatar from "../Avatar/NavAvatar";
function Nav() {
  return (
    <nav className="header-nav ms-auto mr-4">
      <ul className="flex items-center">
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;
