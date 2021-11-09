import './App.css';
import Form from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Form></Form>}></Route>
            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
