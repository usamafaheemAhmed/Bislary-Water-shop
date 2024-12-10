import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import { ConfigProvider, notification } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResourceBlock from './assets/ResourceBlock/ResourceBlock.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider notify={notification}
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary: "#3d4461"
        },
      }}
    >
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ConfigProvider>
  </StrictMode>,
)
