import { ContainerAuthPage } from './style'
import { ContainerForm, Label, Input, Button } from "../PostImage/style"

import { Context } from '../../../../src/Context/Context'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useWindowSize } from '../../../../src/hooks/useWindowSize'

const AuthPage = () => {
  const { isAuth, activateAuth } = useContext(Context);
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    if (email && password === '') {
      return alert('All the information is required')
    }

    const emailCheck = ValidateEmail(email)
    console.log('23 emailCheck >>> ', emailCheck);
    if (emailCheck) {
      activateAuth()
      window.localStorage.setItem('auth', JSON.stringify(isAuth))
      navigate('/home')
    }
  }


  const ValidateEmail = (input: any) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      alert('Invalid email address')
      return false;
    }
  }

  return (
    <ContainerAuthPage >
      <ContainerForm width={'50%'} height={'20%'} >
        <Label>Email</Label>
        <Input width={'60%'} margin={'20px'} onChange={e => setEmail(e.target.value)} />
        <Label>Password</Label>
        <Input width={'60%'} margin={'20px'} type={'password'} onChange={e => setPassword(e.target.value)} />
      </ContainerForm>
      <Button width={'30%'} onClick={handleClick} >Log In...</Button>
    </ContainerAuthPage>
  )
}

export default AuthPage