import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/auth";
const Nav = () => {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;
  const isUserAdmin = context.isUser.user;
  const logoutHandler = async () => {
    await context.onLogout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" href="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/room">
              Room
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item active dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Admin: {isUserAdmin.username}
              </Link>
              <div className="dropdown-menu">
                {isUserAdmin.isAdmin ? (
                  <>
                    <Link className="dropdown-item" href="/admin/books">
                      Books
                    </Link>
                    <Link className="dropdown-item" href="/admin/categorys">
                      Categorys
                    </Link>
                    <Link className="dropdown-item" href="/admin/users">
                      Users
                    </Link>
                  </>
                ) : (
                  <Link className="dropdown-item" href="#">
                    Information
                  </Link>
                )}

                <button onClick={logoutHandler} className="dropdown-item">
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
