import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";
import { CreatePair } from "./components/create-pair/CreatePair";
import { Search } from "./components/search/Search";
import { AuthProvider } from "./contexts/authContext";

function App() {
  debugger;
  return (
    <AuthProvider>
      <div id="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pairs/create" element={<CreatePair />} />
          <Route path="/search" element={<Search />} />
        </Routes>

      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App;
