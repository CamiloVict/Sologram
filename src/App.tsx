import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// * Components
import Layout from './components/Layout/Layout'
import HomePage from './components/Pages/Home/HomePage'
import PostImage from './components/Pages/PostImage/PostImage'
import AuthPage from './components/Pages/AuthPage/AuthPage'
import { NotRegisteredUser } from './components/NotRegisteredUser/NotRegisteredUser'
// * Context
import { useContext } from 'react'

// * Context
import { Context } from './Context/Context'


function App() {
  const { isAuth } = useContext(Context);
  console.log('17 isAuth >>> ', isAuth);
  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
          </Routes>
          <Context.Consumer>
            {({ isAuth }: any) => {
              return isAuth
                ? <Routes>
                    <Route path='/post' element={<PostImage />} />
                  </Routes>
                : <Routes>
                    <Route path='/post' element={<NotRegisteredUser />} />
                  </Routes>
            }
            }
          </Context.Consumer>

        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
