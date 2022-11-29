import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/auth";
const Nav = () => {
  const context = useContext(AuthContext);
  const isLogin = context.isLoggedIn;
  const isUserDisplayname = context.isUser.displayname;
  const logout = () => {
    context.onLogout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" href="/">
        Navbar
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
          {isLogin ? (
            <li className="nav-item dropdown active">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Admin: {isUserDisplayname}
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/admin/google">
                  User Google
                </Link>
                <Link className="dropdown-item" href="/admin/github">
                  User Github
                </Link>
                <button onClick={logout} className="dropdown-item" href="/">
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <li className="nav-item active">
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
