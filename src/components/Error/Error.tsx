import { MdOutlineErrorOutline } from "react-icons/md"
import { Error } from "./style"

declare interface ITitle {
  title: string
}

export const ErrorComponent = ({ title }: ITitle) => {
  return (
    <Error>
      <MdOutlineErrorOutline />  {title}
    </Error>
  )
}
