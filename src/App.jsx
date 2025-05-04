  import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
  import './App.css'
  import Users from './components/users/users.jsx'
  import Settings from './components/settings/settings.jsx'
  import Logout from './components/logout/logout.jsx'
  import General from './components/gen/general.jsx'


  const Layout = () => (
    <div className="flex">
      <div className="side-menu h-[100vh] w-1/4 bg-cyan-600 text-white">
        <h1 className="text-4xl text-center pt-10">The Dash</h1>
        <div className="menu">
          <ul className="text-center text-2xl mt-10">
            <li><Link to="general">General</Link></li>
            <li><Link to="users">Users</Link></li>
            <li><Link to="settings">Settings</Link></li>
            <li><Link to="logout">Logout</Link></li>
          </ul>
        </div>
      </div>
      <div className="Main-Panel h-[75vh] w-3/4 m-20 bg-red-500 text-white text-center text-9xl p-10">
        <Outlet />
      </div>
    </div>
  )

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <h1>No Path yet ;)</h1> }, // default route
        { path: 'general', element: <General /> },
        { path: 'users', element: <Users /> },
        { path: 'settings', element: <Settings /> },
        { path: 'logout', element: <Logout /> },
      ]
    }
  ])

  function App() {
    return <RouterProvider router={routes} />
  }

  export default App
