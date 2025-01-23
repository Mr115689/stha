import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";


const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Home />
        },
        {
          path: 'add-form',
          element: <AddForm />
        },
        {
          path: 'edit-form/:id',
          element: <EditForm />
        },

        {
          path: 'about',
          element: <About />
        }


      ]
    }

  ]);





  return <RouterProvider router={router} />
}
export default App