const Header = () => {
  return (
    <div className="header">
      <div className="home-link">
        <h1>Virtual Short Film Festival </h1>
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
        <button>Watchlist</button>
      </div>
      <div className="top-movies">
        <button>Top movies</button>
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
