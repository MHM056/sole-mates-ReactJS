import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { CreatePair } from "./components/create-pair/CreatePair";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pairs/create" element={<CreatePair />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App;
