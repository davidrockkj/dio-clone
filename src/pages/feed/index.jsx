// import { Link } from 'react-router-dom'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'

import {
  Container,
  Column,
  Title,
  TitleHighlight
} from './styles'

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome="David Rocha" image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
          <UserInfo percentual={27} nome="David Rocha" image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
          <UserInfo percentual={94} nome="David Rocha" image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
          <UserInfo percentual={15} nome="David Rocha" image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
          <UserInfo percentual={25} nome="David Rocha" image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
        </Column>
      </Container>
    </>
  )
}

export { Feed }