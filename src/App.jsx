import './App.css'
// import RoutesNav from './RootNavigator/RoutesNav';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DataTable from "./pages/DataTable";
import Calculator from "./pages/Calculator";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import CommonCode from './pages/CommonCode';
import YouTubeoutube from './pages/youtube';
import UserData from './pages/UserData';
import JokePage from "./JokesGenerator/JokePage"
import Form from './pages/Form';
import ArrayTable from './pages/ArrayTable';
import WeatherApp from './WeatherApp/WeatherApp';
import ToDOList from './ToDoList/ToDOList';
import View from './CrudAplication/View';
import Create from './CrudAplication/Create';
import Update from './CrudAplication/Update';

const App = () => {
  return (
    <>     
    <Routes>            
      <Route path="/" element={<Home />} />      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/datatable" element={<DataTable />} />
      <Route path="/commoncode" element={<CommonCode />} />
      <Route path="/youtube" element={<YouTubeoutube />} />
      <Route path="/userdata" element={<UserData />} />
      <Route path="/jokes" element={<JokePage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/arraytable" element={<ArrayTable />} />
      <Route path="/weatherapp" element={<WeatherApp />} />
      <Route path="/todolist" element={<ToDOList />} />
      <Route path="/crudapplication" element={<Create />} />
      <Route path="/view" element={<View />} />
      <Route path="/update" element={<Update />} />
    </Routes>
    </>
  )
}

export default App
