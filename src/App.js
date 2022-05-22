import { Route, Routes } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Main from './Pages/Home/Main'
import Navbar from './Pages/Shared/Navbar'

// const MySwal = withReactContent(Swal)

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</>
	)
}

export default App
