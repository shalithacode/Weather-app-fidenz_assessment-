import "./Header.css";

function Header() {
  return (
    <header>
      <div className="weather-headline">
        <img src="./icon.svg" alt="weather-icon" className="weather-icon" />
        <h1 className="weather-text">Weather App</h1>
      </div>
    </header>
  );
}

export default Header;
