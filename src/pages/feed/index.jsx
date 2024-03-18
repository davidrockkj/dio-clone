// import { Link } from 'react-router-dom'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'

import {
  Container,
} from './styles'

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo percentual={55} nome='David Rocha' image={'https://avatars.githubusercontent.com/u/62350916?v=4'} />
      </Container>
    </>
  )
}

export { Feed }