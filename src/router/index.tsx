import { lazy } from "react"
import { Navigate } from "react-router-dom"
// 页面组件
const ViewLogin = lazy(() => import("@/views/login"))
const ViewHome = lazy(() => import("@/views/home"))
const ViewAbout = lazy(() => import("@/views/about"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <ViewLogin />
  },
  {
    path: "/home",
    element: <ViewHome />
  },
  {
    path: "/about",
    element: <ViewAbout />
  }
]

export default routes
