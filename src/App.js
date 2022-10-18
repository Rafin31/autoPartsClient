import { Route, Routes } from 'react-router-dom'
import Main from './Pages/Home/Main'
import Navbar from './Pages/Shared/Navbar'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from './Pages/Shared/Footer'
import Login from './Pages/Authentication/Login'
import Signup from './Pages/Authentication/Signup'
import AuthRoute from './Pages/Authentication/AuthRoute'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyOrder from './Pages/Dashboard/MyOrder'
import Profile from './Pages/Dashboard/Profile'
import AddReview from './Pages/Dashboard/AddReview'
import Order from './Pages/Order/Order';
import AddProduct from './Pages/Dashboard/admin/AddProduct';
import ManageOrders from './Pages/Dashboard/admin/ManageOrders';
import ManageProducts from './Pages/Dashboard/admin/ManageProducts';
import MakeAdmin from './Pages/Dashboard/admin/MakeAdmin';
import AdminRoute from './Pages/Authentication/AdminRoute'
import Payment from './Pages/Payment/Payment';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path='dashboard' element={<AuthRoute><Dashboard /></AuthRoute>}>

					<Route index element={<MyOrder />} />
					<Route path='myprofile' element={<Profile />} />
					<Route path='addreview' element={<AddReview />} />
					<Route path='addProduct' element={<AdminRoute><AddProduct /></AdminRoute>} />
					<Route path='manageOrders' element={<AdminRoute><ManageOrders /></AdminRoute>} />
					<Route path='manageProduct' element={<AdminRoute><ManageProducts /></AdminRoute>} />
					<Route path='makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />

				</Route>
				<Route path='/payment/:id' element={
					<AuthRoute>

						<Payment />

					</AuthRoute>} />
				<Route path='/order/:id' element={<AuthRoute><Order /></AuthRoute>} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
