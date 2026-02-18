import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
import { ProgressProvider } from './context/ProgressContext.jsx'
import { MissionProvider } from './context/MissionContext.jsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProgressProvider>
          <MissionProvider>
            <App />
          </MissionProvider>
        </ProgressProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
