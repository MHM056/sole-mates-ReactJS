import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App;
