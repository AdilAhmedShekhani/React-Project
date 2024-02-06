const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" width={150} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
