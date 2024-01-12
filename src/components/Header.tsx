const Header = () => {
  return (
    // Create Navbar
    <header className="navbar">
      <div className="navbar__logo">
        <h2>Logo</h2>
      </div>
      <nav className="navbar__menu">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
