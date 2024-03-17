// import { Link } from 'react-router-dom'

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
            <TitleLogin>Faça seu login e make the change._</TitleLogin>
            <form>
              <Input placeholder='Email' />
              <Input placeholder='Senha' type='password' />
              <Button title='Entrar' variant='secundary' />
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