import assets from "../assets";

function NavigationBar() {
  return (
    <div className="navbar bg-white navbar-sticky">
      <div className="navbar-start ml-4">
        <a href="#home">
          <img width="40" height="40" src={assets.logoNew} alt="logo" />
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item text-black text-l" href="#home">
          Home
        </a>

        <a className="navbar-item text-black text-l" href="#about">
          About
        </a>

        <a className="navbar-item text-black text-l" href="#features">
          Features
        </a>
        <a className="navbar-item text-black text-l" href="#app">
          App
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
