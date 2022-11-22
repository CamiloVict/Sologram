import { VscHome } from "react-icons/vsc";
import { CiSquarePlus } from "react-icons/ci";

// *Components
import { Header } from "./style"

export const FooterNav = () => {

  const SIZE = "24px"

  return (
    <Header>
      <VscHome size={SIZE} />
      <CiSquarePlus size={SIZE}  />
    </Header>
  )
}
