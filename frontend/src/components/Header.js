import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-link">
        <Link to="/">
          <h1>An Animator's Dozen</h1>
        </Link>
      </div>
      <div className="link-showcase">
        <Link to="/">
          <h3>Showcase</h3>
        </Link>
      </div>
      <div className="watchlist">
        <Link to="/watchlist">
          <h3>Submissions</h3>
        </Link>
      </div>
      <div className="upload-link">
        <Link to="/upload">
          <h3>Upload</h3>
        </Link>
      </div>
      <div className="login">
        <Link to="/">
          <h3>Log in</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
