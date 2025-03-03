import './App.css'
// import RoutesNav from './RootNavigator/RoutesNav';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DataTable from "./pages/DataTable";
import Calculator from "./pages/Calculator";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const App = () => {
  return (
    <>     
    <Routes>            
      <Route path="/" element={<Home />} />      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/datatable" element={<DataTable />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    </>
  )
}

export default App
