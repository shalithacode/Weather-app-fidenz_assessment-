import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CityList from "./Components/CityList";
import CardDetail from "./Components/CardDetail/CardDetail";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/cardDetails" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
