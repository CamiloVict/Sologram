import { ContainerAuthPage } from '../../Pages/AuthPage/style'
import { ContainerForm, Label, Input, Button } from "../../Pages/PostImage/style"
import { useNavigate } from 'react-router-dom'


export const NotRegisteredUser = () => {
  const navigate = useNavigate()
  
  const handleRedirect = () => navigate('/auth')

  return (
    <ContainerAuthPage >
      <ContainerForm width={'50%'} height={'20%'} >
        <Label>Please Login</Label>
      </ContainerForm>
      <Button width={'30%'} onClick={handleRedirect} >Log In...</Button>
    </ContainerAuthPage>
  )
}
