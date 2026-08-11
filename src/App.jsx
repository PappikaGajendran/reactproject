import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>

      <Sidebar />

      <Navbar />

      <Routes>

        <Route path="/" element={<MainContent />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;