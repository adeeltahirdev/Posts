import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Posts from './Posts.jsx'
import PostDetail from './PostDetail.jsx'
import CreatePost from './CreatePost.jsx'
import UpdatePost from './UpdatePost.jsx'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {path:'/', element: <App />},
  {path:'/posts', element: <Posts />},
  {path:'/posts/:id', element: <PostDetail />},
  {path:'/posts/create', element: <CreatePost />},
  {path:'/posts/:id/update', element: <UpdatePost />},
  {path:'*', element:<NotFound />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
