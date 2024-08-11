import "./logo.css";
function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <div className="flex items-center justify-center ">
      <a href="/" className="logo">
        {/* <img src="" alt="" /> */}
        <span>DevLms</span>
      </a>
      <i
        onClick={handleToggleSidebar}
        className="fa-solid fa-bars-staggered toggle-sidebar-btn"
      ></i>
    </div>
  );
}

export default Logo;
