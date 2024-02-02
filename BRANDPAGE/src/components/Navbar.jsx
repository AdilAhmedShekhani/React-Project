const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" width={100} />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default Navbar;
