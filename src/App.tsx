import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"

export default function App() {
  const views = useRoutes(routes)
  return <div>{views}</div>
}
