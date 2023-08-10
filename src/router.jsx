import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Index from './pages/Index'
import Form from './pages/Form'
import UserDetail from './pages/UserDetail'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            { path:'/', element: <Index /> },
            { path:'form', element: <Form /> },
            { path:'user/:id', element: <UserDetail /> },

        ]
    }
])

export default router