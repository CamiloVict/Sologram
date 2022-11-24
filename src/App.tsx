import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import HomePage from './components/Pages/Home/HomePage'
// * Components
import Layout from './components/Layout/Layout'
import { lazy, Suspense } from 'react'

function App() {
  // const HomePage = lazy(() => import('./components/Pages/Home/HomePage'));
  const PostImage = lazy(() => import('./components/Pages/PostImage/PostImage'));
  const AuthPage = lazy(() => import('./components/Pages/AuthPage/AuthPage'))
  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
        <Layout >
          <Suspense fallback={<p> Loading...</p>}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/post' element={<PostImage />} />
              <Route path='/auth' element={<AuthPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
