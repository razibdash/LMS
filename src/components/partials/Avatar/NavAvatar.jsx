function NavAvatar() {
  return (
    <>
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
        alt="admin"
      />
      <div
        id="userDropdown"
        className="z-10 hidden bg-white divide-y  divide-gray-100 rounded-lg shadow w-44 "
      >
        <div className="px-4 py-3 text-sm text-stone-600 ">
          <div>LMS admin</div>
          <div className="font-medium truncate">lms@gmail.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="avatarButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
}

export default NavAvatar;
