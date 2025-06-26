import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ManagerHome from "./pages/ManagerHome/Index";
import router from "./routers/router";



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}