import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()


axios.defaults.baseURL = 'http://localhost:5000';
axios.interceptors.request.use(function (config) {

	const token = `Bearer ${localStorage.getItem('accessToken')}`
	config.headers.authorization = token

	return config;
}, function (error) {
	return Promise.reject(error);
});

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
