import { VscHome } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import {AiOutlinePlusSquare} from 'react-icons/ai'

// *Components
import { Header } from "./style"

export const FooterNav = () => {

  const SIZE = "24px"

  return (
    <Header>
      <AiOutlineUser size={SIZE} />
      <VscHome size={SIZE} />
      <AiOutlinePlusSquare size={SIZE}  />
    </Header>
  )
}
