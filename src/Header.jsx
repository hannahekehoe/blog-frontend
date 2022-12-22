import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            What's Up Blawg
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/">Home </Link>|<Link to="/about">About </Link>|
              {localStorage.jwt === undefined ? (
                <>
                  <a onClick={handleSignupShow} href="#">
                    Signup
                  </a>
                  |
                  <a onClick={handleLoginShow} href="#">
                    Login
                  </a>
                </>
              ) : (
                <>
                  <a onClick={handleLogout} href="#">
                    Logout
                  </a>
                </>
              )}
              |<Link to="/posts/new">New Post</Link>
              <a className="nav-link disabled">Secret Corner</a>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
    </div>
  );
}
