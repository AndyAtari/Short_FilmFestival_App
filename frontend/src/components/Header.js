import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-link">
        <Link to="/">
          <h1>Animated Short Film Festival </h1>
        </Link>
      </div>
      <div className="search">
        <form action="/" method="get">
          <label htmlFor="header-search"></label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Short Films"
            name="s"
          />
        </form>
      </div>
      <div className="watchlist">
        <Link to="/watchlist">
          <button>Watchlist</button>
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
