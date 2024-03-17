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
          <MenuRight href="#" >Home</MenuRight>
          <Button ></Button>
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export { Header }