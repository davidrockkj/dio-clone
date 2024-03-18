// import { Link } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper
} from './styles'

const Login = () => {

  const navigate = useNavigate()

  const handleClickSignin = () => {
    navigate('/feed');
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubLogin>Faça seu login e make the change._</SubLogin>
            <form>
              <Input placeholder='Email' leftIcon={<MdEmail />} />
              <Input placeholder='Senha' type='password' leftIcon={<MdLock />} />
              <Button title='Entrar' variant='secundary' onClick={ handleClickSignin } type='button' />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Login }