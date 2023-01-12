import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { useTheme } from "././context/DarkModeContext";

function App() {
  const darkmode = useTheme();

  const themeStyle = {
    backgroundColor: darkmode ? '#1A1A40' : '',
    color: darkmode ? 'white' : '',
  }
  return (
    <div style={themeStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
