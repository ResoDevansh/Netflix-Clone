import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyContext from "./utils/Provider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Step1 from "./pages/Step1";

const App = () => {
  return (
    <Router>
      <MyContext>
        <Routes>
          <Route path="/in/login" element={<Login />} />
          <Route path="/in/" element={<Home />} />
          <Route path="/signup/password/*" element={<Step1 />} />
        </Routes>
      </MyContext>
    </Router>
  );
};

export default App;
