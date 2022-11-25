import { Logo } from "../Logo/Logo"
import { Header } from './style'
import { Context } from "../../../src/Context/Context"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const NavHeader = () => {
  const { deactivateAuth } = useContext(Context)
  const navigate = useNavigate()
  
  const handleLogOut = () => {
    deactivateAuth()
    window.localStorage.setItem('auth', JSON.stringify(false))
    navigate('/auth')
  }

  return (
    <Header>
      <Logo />
      <h6 style={{position: 'absolute', right: '20px'}} onClick={handleLogOut} >
        Log out
      </h6>
    </Header>
  )
}

