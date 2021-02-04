import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-link">
        <Link to="/">
          <h1>An Animator's Dozen</h1>
        </Link>
      </div>
      <div className="questions">
        <Link to="/q&a">
          <h3>Filmmaker Q&A</h3>
        </Link>
      </div>
      <div className="upload-link">
        <Link to="/upload">
          <h3>Submit Your Short</h3>
        </Link>
      </div>
      <div className="login">
        <Link to="/login">
          <h3>Log in</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
