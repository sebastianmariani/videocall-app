// Dependencies
import { Routes, Route } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import NoAccount from "./pages/NoAccount";
import CallPage from "./pages/CallPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/no-account" element={<NoAccount />}></Route>
        <Route path="/callpage" element={<CallPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
