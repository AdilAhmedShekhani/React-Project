import "./App.css"

const App = () => {
  return (
    <div>
      <nav>
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
    </div>
  );
};

export default App;
