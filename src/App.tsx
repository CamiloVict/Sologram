import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// * Components
import { NavHeader } from './components/Header/Header'
import { FooterNav } from './components/FooterNav/FooterNav'
import { Card } from './components/Card/Card'

function App() {

  return (
    <>
      <BrowserRouter >
        <GlobalStyle />
          <NavHeader />
            <Card />
          <FooterNav />
      </BrowserRouter>
    </>
  )
}

export default App
