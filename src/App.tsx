import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// * Components
import { NavHeader } from './components/NavHeader/NavHeader'
import { FooterNav } from './components/FooterNav/FooterNav'
import { Card } from './components/Card/Card'
import Layout from './components/Layout/Layout'
import HomePage from './components/Pages/HomePage'
import PostImage from './components/Pages/PostImage/PostImage'

function App() {

  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
        <Layout >
          {/* <HomePage /> */}
          <PostImage />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
