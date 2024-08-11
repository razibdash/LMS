import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header z-10 h-[68px] shadow-lg bg-[#fff] pl-8 flex items-center fixed top-0 w-full  transition-all">
        <Logo />
        <SearchBar />
        {/* nav */}
      </header>
    </>
  );
}

export default Header;
