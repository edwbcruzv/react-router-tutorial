import React from "react";
import {
  BrowserRouter,
  Navigate, // Permite la navegabilidad en la pag
  Route, // permite definir una ruta URL
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import UsersPages from "./pages/UsersPages";
import LifeCyclePage from "./pages/LifeCyclePage";
import FormsPage from "./pages/FormsPage";
import { Paper } from "@mui/material";
import AnidationPage from "./pages/AnidationPage";
import ContactFormPage from "./pages/ContactFormPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Paper elevation={5} square>
        <Routes>
          <Route
            path="/" //nombre de la url
            element={<HomePage cadena="cadenasss"><h2>hijo</h2></HomePage>} //componente a mostrar a traves del path
          />
          <Route
            path="/about" //nombre de la url
            element={<AboutPage />} //componente a mostrar a traves del path
          />
          <Route
            path="/users" //nombre de la url
            element={<UsersPages />} //componente a mostrar a traves del path
          />
          <Route
            path="/lifecycle" //nombre de la url
            element={<LifeCyclePage />} //componente a mostrar a traves del path
          />
          <Route
            path="/forms" //nombre de la url
            element={<FormsPage />} //componente a mostrar a traves del path
          />
          <Route
            path="/anidacion" //nombre de la url
            element={<AnidationPage />} //componente a mostrar a traves del path
          />
          <Route
            path="/contact" //nombre de la url
            element={<ContactFormPage />} //componente a mostrar a traves del path
          />
          <Route
            path="/users/:id" //nombre de la url
            element={<UserPage />} //componente a mostrar a traves del path
          />
          <Route
            path="/dashboard/*" //nombre de la url e indicando que abra mas rutas
            element={<Dashboard />} //componente a mostrar a traves del path
          >
            <Route path="welcome" element={<p>Welcome</p>} />
          </Route>
          {/* Redireccionar sin usar directamente el link correcto */}
          <Route
            path="/usuarios/" //nombre de la url
            element={<Navigate to="/users" />} //componente a mostrar a traves del path
          />
          <Route
            path="/acerca-de/" //nombre de la url
            element={<Navigate to="/about" />} //componente a mostrar a traves del path
          />

          {/* Cuando no exista la ruta */}
          <Route
            path="*" //nombre de la url
            element={<NotFoundPage />} //componente a mostrar a traves del path
          />
        </Routes>
      </Paper>
    </BrowserRouter>
  );
};

export default App;
