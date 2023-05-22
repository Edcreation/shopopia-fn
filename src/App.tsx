import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { Loader } from './components/loaders/loaders';

const Home = lazy(() => import('./pages/homepage/Home'))
const Accounts = lazy(() => import('./pages/accounts/Accounts'))
const Navbar = lazy(() => import('./components/navbar/Navbar'))

function App() {

  return (
    <>
      <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/accounts/*' element={ <Accounts /> }></Route>
          </Routes>
        </Suspense>
    </>
  )
}

export default App
