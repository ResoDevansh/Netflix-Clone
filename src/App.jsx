import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/in" element={<Home />} />
        <Route path="/in/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
