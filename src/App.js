import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';
import Login from './components/Pages/LoginDetails/Login/Login';
import Register from './components/Pages/LoginDetails/Register/Register';
import BuyNow from './components/Pages/BuyNow/BuyNow';
import RequireAuth from './components/Pages/LoginDetails/RequireAuth/RequireAuth';
import Footer from './components/Pages/Home/Footer/Footer';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import DeleteProducts from './components/Pages/Dashboard/DeleteProducts/DeleteProducts';
import PlaceOrder from './components/Pages/BuyNow/PlaceOrder';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './components/Pages/Dashboard/MyOrder/MyOrder';
import AllUsers from './components/Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './components/Pages/LoginDetails/RequireAdmin/RequireAdmin';
import AllReviews from './components/Pages/Dashboard/AllRivews/AllReviews';
import MyProfile from './components/Pages/Dashboard/MyProfile/MyProfile';
import Payment from './components/Pages/Dashboard/Payment/Payment';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Notfound from './components/Pages/NotfoundPage/Notfound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/buyNow/:buyNowId' element={
          <RequireAuth>
            <BuyNow></BuyNow>
          </RequireAuth>
        }></Route>
        <Route path='/order/:buyNowId' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='allUsers' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='allReviews' element={<AllReviews></AllReviews>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>
          <Route path='deleteProducts' element={
            <RequireAdmin>
              <DeleteProducts></DeleteProducts>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>


    </div >
  );
}

export default App;
