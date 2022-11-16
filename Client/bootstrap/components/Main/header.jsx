import Link from "next/link";
const Nav = () => {
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
          <li className="nav-item active">
            <Link className="nav-link" href="/register">
              register
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/users">
              user
            </Link>
          </li>
          <li className="nav-item active dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Categorys
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" href="1">
                Another action
              </Link>
              <Link className="dropdown-item" href="2">
                Another action
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
