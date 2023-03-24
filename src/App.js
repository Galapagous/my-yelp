import { Amplify } from 'aws-amplify';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import awsExports from './aws-exports';
import Register from './pages/Register/Register';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  const Layout = ()=>{
    return(
      <div className='main-container'>
        <Navbar out = {signOut} current = {user}/>
        <div className='main-content'>
          <Outlet/>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: (<Layout/>),
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: "/Add",
          element:<Register/>
        }
      ]
    }
  ])
  return (
    // <>
    //   {/* <h1>Hello {user.username}</h1> */}
    //   <button onClick={signOut}>Sign out</button>
    // </>
    <RouterProvider router={router}></RouterProvider>
  );
}

export default withAuthenticator(App);