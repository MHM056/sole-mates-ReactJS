import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";
import { CreatePair } from "./components/create-pair/CreatePair";
import { Search } from "./components/search/Search";
import { Catalog } from "./components/catalog/Catalog";
import { ShoeDetails } from "./components/shoe-details/ShoeDetails";
import { EditPair } from "./components/edit-pair/EditPair";

function App() {
  return (
    <AuthProvider>
      <div id="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/pairs/create" element={<CreatePair />} />
          <Route path="/pairs/:shoeId/details" element={<ShoeDetails />} />
          <Route path="/pairs/:shoeId/edit" element={<EditPair />} />
          <Route path="/search" element={<Search />} />
        </Routes>

      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App;
