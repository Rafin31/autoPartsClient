import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'


const queryClient = new QueryClient()

// axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.baseURL = 'https://asif.protugaltour.com/';
axios.defaults.baseURL = 'https://asif.tourparisiya.com/';


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<BrowserRouter>

			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>

		</BrowserRouter>
	</React.StrictMode>
)
