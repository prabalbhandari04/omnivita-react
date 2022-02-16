import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Appointment from "./pages/Appointment";
import HealthLog from "./pages/HealthLog";
import Symptom from "./pages/Symptom";
import Prescription from "./pages/Prescription";
import Doctors from "./pages/Doctors";
import Clinic from "./pages/Clinic";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Settings from "./pages/Settings";


function App() {
  const user = true;
  

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={ user ? <Home /> : <Navigate to = "/login" />} />
          <Route path="/login" element={ user ? <Navigate to = "/" /> : <Login />} />
          <Route path="/register" element={ user ? <Navigate to = "/" /> : <Register />} />
          <Route path="/book" element={ user ? <Appointment /> : <Navigate to = "/login" />} />
          <Route path="/log" element={  user ? <HealthLog /> : <Navigate to = "/login" />} />
          <Route path="/symptom" element={ user ? <Symptom /> : <Navigate to = "/login" />} />
          <Route path="/prescription" element={ user ? <Prescription /> : <Navigate to = "/login" />} />
          <Route path="/doctors" element={ user ? <Doctors /> : <Navigate to = "/login" />} />
          <Route path="/clinic" element={ user ? <Clinic /> : <Navigate to = "/login" />} />
          <Route path="/settings" element={ user ? <Settings /> : <Navigate to = "/login" />} />
          <Route path="/login/forgot" element={ user? <Navigate to = "/" /> : <ForgotPassword />} />
          <Route path="/login/forgot/change" element={ user? <Navigate to = "/" /> : <ChangePassword />} />

        </Routes>
      </Router>
  );
}

export default App;
