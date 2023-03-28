import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';


function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </div>
  );
}

export default App;

