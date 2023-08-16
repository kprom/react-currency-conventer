import logo from "../images/panda.jpg";

const Header = () => {
  return (
    <header className="title">
      <img className="logo" src={logo} alt="app-logo" />
      <h1 className="heading">CURRENCY CONVERTER</h1>
    </header>
  );
};

export default Header;
