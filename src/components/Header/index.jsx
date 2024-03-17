import {
  HeaderContainer,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input
} from "./styles"
import { Button } from "../Button"

import logo from '../../assets/logo-dio.png';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <img src={logo} alt="Logo da dio" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href='#'>Home</MenuRight>
          <Button title='Entrar' />
          <Button title='Cadastrar' />
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export { Header }