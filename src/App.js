import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1 className="text-5xl">Welcome</h1>
		</div>
	)
}

export default App
