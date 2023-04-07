import { lazy } from "react"
import { Navigate } from "react-router-dom"
import { cache } from "@/utils"
// 页面组件
const ViewLogin = lazy(() => import("@/views/login"))
const ViewHome = lazy(() => import("@/views/home"))
const ViewAbout = lazy(() => import("@/views/about"))

const routes = [
  {
    path: "/",
    element: <Navigate to={cache.getCache("token") ? "/home" : "/login"} />
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
