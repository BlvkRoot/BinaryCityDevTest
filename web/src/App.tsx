import React from 'react'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './assets/global'
import Router from "./routes"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Router />
    </>
  )
}

export default App
