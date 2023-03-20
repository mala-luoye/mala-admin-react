import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// 样式引入
import "reset-css"
import "@arco-design/web-react/dist/css/arco.css"
import "@/assets/css/index.less"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)
