import {
  HeaderContainer,
  Row,
  Column,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input
} from "./styles"
import { Button } from "../Button"

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          {/* <img src={} alt="Logo da dio" /> */}
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export { Header }