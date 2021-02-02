import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-link">
        <Link to="/">
          <h1>An Animator's Dozen</h1>
          <p>Animated Short Film Festival</p>
        </Link>
      </div>
      <div className="watchlist">
        <Link to="/watchlist">
          <button>Submissions</button>
        </Link>
      </div>
      <div className="upload-link">
        <button>Upload</button>
      </div>
      <div className="login">
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Header;
