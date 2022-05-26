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
					<Route path='addProduct' element={<AddProduct />} />
				</Route>
				<Route path='/order/:id' element={<AuthRoute><Order /></AuthRoute>} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
