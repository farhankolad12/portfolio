import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand fs-1" to="/">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll ms-auto">
            <li className="nav-item me-4">
              <Link className="nav-link text-dark fw-bold" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item me-4">
              <HashLink className="nav-link text-dark fw-bold" to="/#work">
                Work
              </HashLink>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link text-dark fw-bold"
                download="Resume-Farhan"
                target="_blank"
                rel="noreferrer"
                to="/assets/resume_farhan_kolad.pdf"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
