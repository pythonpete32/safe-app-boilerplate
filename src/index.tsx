import React from 'react'
import ReactDOM from 'react-dom/client'
import SafeProvider from '@safe-global/safe-apps-react-sdk'
import App from './App'
import { Loader2 } from 'lucide-react'

// Vite way of mounting
const root = document.getElementById('root')

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <SafeProvider
      loader={
        <>
          <h1 className="text-4xl font-mono font-semibold">Waiting for Safe...</h1>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </>
      }
    >
      <App />
    </SafeProvider>
  </React.StrictMode>,
)
