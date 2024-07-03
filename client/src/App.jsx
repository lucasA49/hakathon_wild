import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import du fichier App.scss
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
