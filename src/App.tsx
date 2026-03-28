import { RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { router } from "./route/router"

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App