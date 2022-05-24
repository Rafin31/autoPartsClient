import { Route, Routes } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Main from './Pages/Home/Main'
import Navbar from './Pages/Shared/Navbar'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from './Pages/Shared/Footer'
import Login from './Pages/Authentication/Login'
import Signup from './Pages/Authentication/Signup'

// const MySwal = withReactContent(Swal)

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
