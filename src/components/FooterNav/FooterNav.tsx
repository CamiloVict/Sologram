import { VscHome } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlusSquare } from 'react-icons/ai'

// *Components
import { Header } from "./style"
import { Link } from "react-router-dom";

export const FooterNav = () => {

  const SIZE = "24px"
  const handleClick = () => {

  }
  return (
    <Header>
      <Link to={'./auth'}>
        <AiOutlineUser size={SIZE} />
      </Link>
      <Link to={'./'} >
        <VscHome size={SIZE} />
      </Link>
      <Link to={'./post'}>
      <AiOutlinePlusSquare size={SIZE} />
      </Link>
    </Header>
  )
}
