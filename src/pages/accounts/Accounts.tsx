
import './style.scss'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/loading'
import SignUp from './components/SignUp'

const Tfa = lazy(() => import('./components/Tfa'))
const Login_Main = lazy(() => import('./components/Login_Main'))

export default function Accounts() {
  return (
    <div className='login__container'>
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/login' element={<Login_Main />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/tfa' element={<Tfa />}></Route>
            </Routes>
        </Suspense>
    </div>
  )
}
