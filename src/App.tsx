import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// * Components
import { NavHeader } from './components/Header/Header'
import { FooterNav } from './components/FooterNav/FooterNav'

function App() {

  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
        <NavHeader />
          Content
        <FooterNav />
      </BrowserRouter>
    </>
  )
}

export default App
