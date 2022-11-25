import { VscHome } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlusSquare } from 'react-icons/ai'

// *Components
import { Header, Link } from "./style"
import { useLocation } from "react-router-dom";

export const FooterNav = () => {

  const location = useLocation()

  const colorAut: string = location.pathname.includes('auth') ? '#1167b1' : ''
  const colorHome: string = location.pathname.includes('home') ? '#1167b1' : ''
  const colorPost: string = location.pathname.includes('post') ? '#1167b1' : ''

  const SIZE = "24px"

  return (
    <Header>
      <Link to={'./auth'} color={''} border={colorAut}>
        <AiOutlineUser size={SIZE} color={colorAut || 'black'} />
      </Link>
      <Link to={'./home'} color={''} border={colorHome} >
        <VscHome size={SIZE} color={colorHome || 'black'} />
      </Link>
      <Link to={'./post'} color={''} border={colorPost}>
        <AiOutlinePlusSquare size={SIZE} color={colorPost || 'black'} />
      </Link>
    </Header>
  )
}
