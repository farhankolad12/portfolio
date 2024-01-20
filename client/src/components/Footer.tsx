import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            className="mb-3 mb-md-0 text-body-secondary text-decoration-none lh-1 fs-2"
            to="/"
          >
            <img src="/assets/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              target="_blank"
              href="https://www.instagram.com/farhan_kolad_/"
            >
              <i className="bi bi-instagram fs-3 " />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              target="_blank"
              href="https://linkedin.com/in/farhan-kolad-565686228"
            >
              <i className="bi bi-linkedin fs-3 " />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              target="_blank"
              href="https://github.com/farhankolad12"
            >
              <i className="bi bi-github fs-3 " />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              target="_blank"
              href="mailto:farhankolad@gmail.com"
            >
              <i className="bi bi-envelope-at-fill fs-3 " />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
