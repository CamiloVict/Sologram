import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// * Components
import Layout from './components/Layout/Layout'
import HomePage from './components/Pages/Home/HomePage'
import PostImage from './components/Pages/PostImage/PostImage'
import AuthPage from './components/Pages/AuthPage/AuthPage'


function App() {
  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
        <Layout >
            <Routes>
              <Route path='/home/' element={<HomePage />} />
              <Route path='/post' element={<PostImage />} />
              <Route path='/auth' element={<AuthPage />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
