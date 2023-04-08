import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import { useTokenStatus } from "@/hooks"
export default function App() {
  useTokenStatus()
  const views = useRoutes(routes)
  return <div className="app">{views}</div>
}
