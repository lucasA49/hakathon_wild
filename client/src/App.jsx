import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

// Import du fichier App.scss
import "./App.scss";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
